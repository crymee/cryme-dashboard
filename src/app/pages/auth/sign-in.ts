import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { SignInGQL } from '@generated/generated';
import { catchError, EMPTY, finalize, from, switchMap } from 'rxjs';
import { LoggerService } from '@/services/logger.service';
import { SIGN_IN_FORM_PROVIDER, SignInForm } from '@/app/pages/auth/form';
import { AuthService } from '@/app/services/auth.service';
import { PusherBeamsService } from '@/app/services/push-beams.service';

@Component({
    selector: 'app-sign-in',
    providers: [SIGN_IN_FORM_PROVIDER],
    imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, RippleModule, AppFloatingConfigurator, MessageModule],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-16 shrink-0 mx-auto"></svg>
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Cryme</div>
                            <span class="text-muted-color font-medium">Sign in to continue</span>
                        </div>

                        <form [formGroup]="form" (ngSubmit)="onSubmit()">
                            <label for="email" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email" type="text" placeholder="Email address" class="w-full md:w-120 mb-4" formControlName="email" />

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

                            <label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>

                            <p-password id="password" formControlName="password" placeholder="Password" [toggleMask]="true" [fluid]="true" [feedback]="false" styleClass="mb-4"></p-password>

                            @if (password.invalid && (password.dirty || password.touched)) {
                                @if (password.errors?.['required']) {
                                    <small class="block p-error mb-4">
                                        <p-message severity="error" variant="simple" size="small">Password is required. </p-message>
                                    </small>
                                }
                            }

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <a class="font-medium no-underline text-right cursor-pointer text-primary" routerLink="/auth/sign-up">Don't have an account? Sign up</a>
                                <a class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</a>
                            </div>

                            @if (form.errors?.['api']) {
                                @for (item of Object.entries(form.errors?.['api']); track item[0]) {
                                    <small class="block p-error mb-4">
                                        <p-message severity="error" variant="simple" size="small">{{ item[1] }}</p-message>
                                    </small>
                                }
                            }

                            <p-button icon="pi pi-sign-in" [loading]="loading()" label="Sign In" styleClass="w-full mt-2" type="submit" [disabled]="form.invalid"></p-button>

                            <p-button icon="pi pi-google" [loading]="loading()" (click)="signInWithGoogle()" label="Google" styleClass="w-full mt-2" type="button" severity="secondary"></p-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class SignIn {
    loading = signal(false);

    constructor(
        public form: SignInForm,
        private readonly signInGQL: SignInGQL,
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly loggerService: LoggerService,
        private readonly pusherBeamsService: PusherBeamsService
    ) {
        this.authService.initializeGoogleAuth();
    }

    get email() {
        return this.form.controls.email;
    }

    get password() {
        return this.form.controls.password;
    }

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.loading.set(true);

        this.signInGQL
            .mutate({
                variables: { data: this.form.getRawValue() }
            })
            .pipe(
                switchMap(async (res) => {
                    const payload = res.data?.signIn;

                    if (payload?.user) {
                        try {
                            await this.pusherBeamsService.setAuthenticatedUser(payload.user.id);
                        } catch (e) {
                            this.loggerService.error(e);
                        }

                        this.loggerService.info(payload.user);

                        return from(this.router.navigate(['/']));
                    }

                    return EMPTY;
                }),
                catchError((e) => {
                    this.form.onApiError(e);

                    return EMPTY;
                }),
                finalize(() => {
                    this.loading.set(false);
                })
            )
            .subscribe();
    }

    signInWithGoogle() {
        this.authService.promptLogin();
    }

    protected readonly Object = Object;
}
