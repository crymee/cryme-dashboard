import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { CommonModule } from '@angular/common';
import { ForgotPasswordGQL } from '@generated/generated';
import { catchError, EMPTY, finalize, from, switchMap } from 'rxjs';
import { LoggerService } from '@/services/logger.service';

@Component({
	selector: 'app-forgot-password',
	standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule, RouterModule, RippleModule, AppFloatingConfigurator, MessageModule],
		template: `
		<app-floating-configurator />
		<div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
			<div class="flex flex-col items-center justify-center w-full max-w-lg">
				<div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
					<div class="w-full min-w-[350px] bg-surface-0 dark:bg-surface-900 py-10 px-8 sm:px-12" style="border-radius: 53px">
						<div class="text-center mb-8">
							<svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-16 shrink-0 mx-auto"></svg>
							<div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Cryme</div>
							<span class="text-muted-color font-medium">Forgot your password?</span>
						</div>

						<form [formGroup]="form" (ngSubmit)="onSubmit()" class="w-full min-w-[300px]">
							<label for="email" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
							<input
								pInputText
								id="email"
								type="email"
								placeholder="Email address"
								class="w-full min-w-[300px] mb-4"
								formControlName="email"
								autocomplete="off"
							/>

							@if (email.invalid && (email.dirty || email.touched)) {
								@if (email.errors?.['required']) {
									<small class="block p-error mb-4">
										<p-message severity="error" variant="simple" size="small">Email is required. </p-message>
									</small>
								}
								@if (email.errors?.['email']) {
									<small class="block p-error mb-4">
										<p-message severity="error" variant="simple" size="small">Please enter a valid email. </p-message>
									</small>
								}
							}

							@if (success()) {
								<div class="mb-4">
									<p-message severity="success" variant="simple" size="small">If an account exists with this email, a reset link has been sent. </p-message>
								</div>
							}

							@if (form.errors?.['api']) {
								@for (item of getApiErrors(form); track item[0]) {
									<small class="block p-error mb-4">
										<p-message severity="error" variant="simple" size="small">{{ item[1] }}</p-message>
									</small>
								}
							}

							<div class="flex items-center justify-between mt-2 mb-8 gap-8">
								<a class="font-medium no-underline text-right cursor-pointer text-primary" routerLink="/auth/sign-in">Sign In</a>
								<a class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" routerLink="/auth/sign-up">Sign up</a>
							</div>

							<p-button
								icon="pi pi-key"
								[loading]="loading()"
								[label]="success() ? 'Resend Email' : 'Send Reset Link'"
								styleClass="w-full mt-2"
								type="submit"
								[disabled]="form.invalid || loading() || success()"
							></p-button>
						</form>
					</div>
				</div>
			</div>
		</div>
	`
})
export class ForgotPassword {
	form: FormGroup;
	loading = signal(false);
	success = signal(false);

	constructor(
		private readonly fb: FormBuilder,
		private readonly router: Router,
		private readonly loggerService: LoggerService
	) {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.email]]
		});
	}

	private readonly forgotPasswordGQL = inject(ForgotPasswordGQL);

	get email() {
		return this.form.get('email')!;
	}

	getApiErrors(form: FormGroup) {
		const apiErrors = form.errors?.['api'];
		return apiErrors ? Object.entries(apiErrors) : [];
	}

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.loading.set(true);

		this.forgotPasswordGQL
			.mutate({
				variables: { data: this.form.getRawValue() }
			})
			.pipe(
				switchMap((res) => {
					if ((res as any).data?.forgotPassword) {
						this.success.set(true);
						this.loggerService.info('Password reset email sent');
					}

					return EMPTY;
				}),
				catchError((e) => {
					this.form.setErrors({ api: { email: 'Failed to send reset email. Please try again.' } });
					return EMPTY;
				}),
				finalize(() => {
					this.loading.set(false);
				})
			)
			.subscribe();
	}
}
