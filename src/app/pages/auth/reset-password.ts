import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordGQL } from '@generated/generated';
import { catchError, EMPTY, finalize, from, switchMap } from 'rxjs';
import { LoggerService } from '@/services/logger.service';

@Component({
	selector: 'app-reset-password',
	standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, RippleModule, AppFloatingConfigurator, MessageModule],
		template: `
		<app-floating-configurator />
		<div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
			<div class="flex flex-col items-center justify-center w-full max-w-lg">
				<div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
					<div class="w-full min-w-[350px] bg-surface-0 dark:bg-surface-900 py-10 px-8 sm:px-12" style="border-radius: 53px">
						<div class="text-center mb-8">
							<svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-16 shrink-0 mx-auto"></svg>
							<div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Cryme</div>
							<span class="text-muted-color font-medium">Reset your password</span>
						</div>

						<form [formGroup]="form" (ngSubmit)="onSubmit()" class="w-full min-w-[300px]">
							<label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">New Password</label>
							<p-password id="password" formControlName="password" placeholder="New Password" [toggleMask]="true" [fluid]="true" [feedback]="false" styleClass="mb-4" autocomplete="new-password"></p-password>

							@if (password.invalid && (password.dirty || password.touched)) {
								@if (password.errors?.['required']) {
									<small class="block p-error mb-4">
										<p-message severity="error" variant="simple" size="small">Password is required. </p-message>
									</small>
								}
								@if (password.errors?.['minlength']) {
									<small class="block p-error mb-4">
										<p-message severity="error" variant="simple" size="small">Password must be at least 8 characters. </p-message>
									</small>
								}
							}

							<label for="confirmPassword" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Confirm Password</label>
							<p-password id="confirmPassword" formControlName="confirmPassword" placeholder="Confirm Password" [toggleMask]="true" [fluid]="true" [feedback]="false" styleClass="mb-4" autocomplete="new-password"></p-password>

							@if (confirmPassword.invalid && confirmPassword.touched && confirmPassword.errors?.['required']) {
								<small class="block p-error mb-4">
									<p-message severity="error" variant="simple" size="small">Please confirm your password. </p-message>
								</small>
							}

							@if (form.errors?.['passwordsNotMatching']) {
								<small class="block p-error mb-4">
									<p-message severity="error" variant="simple" size="small">Passwords do not match. </p-message>
								</small>
							}

							@if (form.errors?.['api']) {
								<small class="block p-error mb-4">
									<p-message severity="error" variant="simple" size="small">{{ getApiErrorMessage(form) }}</p-message>
								</small>
							}

							<div class="flex items-center justify-between mt-2 mb-8 gap-8">
								<a class="font-medium no-underline text-right cursor-pointer text-primary" routerLink="/auth/sign-in">Sign In</a>
								<a class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" routerLink="/auth/sign-up">Sign up</a>
							</div>

							<p-button icon="pi pi-check" [loading]="loading()" label="Reset Password" styleClass="w-full mt-2" type="submit" [disabled]="form.invalid || loading()"></p-button>
						</form>
					</div>
				</div>
			</div>
		</div>
	`
})
export class ResetPassword {
	form: FormGroup;
	loading = signal(false);
	token = signal('');
	private readonly resetPasswordGQL = inject(ResetPasswordGQL);

	constructor(
		private readonly fb: FormBuilder,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
		private readonly loggerService: LoggerService
	) {
		this.resetPasswordGQL = inject(ResetPasswordGQL);
		this.form = this.fb.group(
			{
				password: ['', [Validators.required, Validators.minLength(8)]],
				confirmPassword: ['', [Validators.required]]
			},
			{ validators: this.passwordMatchValidator }
		);

		this.route.queryParams.subscribe((params) => {
			this.token.set(params['token'] || '');
			if (!params['token']) {
				this.router.navigate(['/auth/sign-in']);
			}
		});
	}

	get password() {
		return this.form.get('password')!;
	}

	get confirmPassword() {
		return this.form.get('confirmPassword')!;
	}

	passwordMatchValidator(form: FormGroup): null | { passwordsNotMatching: boolean } {
		const password = form.get('password')?.value;
		const confirmPassword = form.get('confirmPassword')?.value;

		return password === confirmPassword ? null : { passwordsNotMatching: true };
	}

	getApiErrorMessage(form: FormGroup): string {
		const apiErrors = form.errors?.['api'];
		return apiErrors?.reset || 'An error occurred';
	}

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { confirmPassword, ...data } = this.form.getRawValue();

		this.loading.set(true);

		this.resetPasswordGQL
			.mutate({
				variables: {
					data: {
						token: this.token(),
						password: data.password
					}
				}
			})
			.pipe(
				switchMap((res) => {
					if ((res as any).data?.resetPassword) {
						this.loggerService.info('Password reset successfully');
						return from(this.router.navigate(['/auth/sign-in']));
					}

					return EMPTY;
				}),
				catchError((e: any) => {
					const errorMessage = e.message || 'Failed to reset password. The link may be invalid or expired.';
					this.form.setErrors({ api: { reset: errorMessage } });
					return EMPTY;
				}),
				finalize(() => {
					this.loading.set(false);
				})
			)
			.subscribe();
	}
}
