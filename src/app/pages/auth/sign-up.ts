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
import { Message } from 'primeng/message';
import { SignUpGQL } from '@generated/generated';
import { catchError, EMPTY, finalize, from, switchMap } from 'rxjs';
import { SIGN_UP_FORM_PROVIDER, SignUpForm } from '@/app/pages/auth/form';
import { LoggerService } from '@/services/logger.service';

@Component({
    selector: 'app-sign-up',
    providers: [SIGN_UP_FORM_PROVIDER],
    imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, RippleModule, AppFloatingConfigurator, Message],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-16 shrink-0 mx-auto"></svg>
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Cryme</div>
                            <span class="text-muted-color font-medium">Sign up to continue</span>
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

                            <div class="flex flex-col gap-4 mb-4">
                                <div class="flex flex-wrap gap-6">
                                    <div class="flex flex-col grow basis-0 gap-2">
                                        <label for="firstName" class="block text-surface-900 dark:text-surface-0 text-xl font-medium">First name</label>
                                        <input pInputText id="firstName" type="text" placeholder="First name" formControlName="firstName" />

                                        @if (firstName.invalid && (firstName.dirty || firstName.touched)) {
                                            @if (firstName.errors?.['required']) {
                                                <small class="block p-error mb-4">
                                                    <p-message severity="error" variant="simple" size="small">First name is required. </p-message>
                                                </small>
                                            }
                                            @if (firstName.errors?.['maxlength']) {
                                                <small class="block p-error mb-4">
                                                    <p-message severity="error" variant="simple" size="small">First name cannot be over 60 characters. </p-message>
                                                </small>
                                            }
                                        }
                                    </div>
                                    <div class="flex flex-col grow basis-0 gap-2">
                                        <label for="lastName" class="block text-surface-900 dark:text-surface-0 text-xl font-medium">Last name</label>
                                        <input pInputText id="lastName" type="text" placeholder="Last name" formControlName="lastName" />

                                        @if (lastName.invalid && (lastName.dirty || lastName.touched)) {
                                            @if (lastName.errors?.['required']) {
                                                <small class="block p-error mb-4">
                                                    <p-message severity="error" variant="simple" size="small">Last name is required. </p-message>
                                                </small>
                                            }
                                            @if (lastName.errors?.['maxlength']) {
                                                <small class="block p-error mb-4">
                                                    <p-message severity="error" variant="simple" size="small">Last name cannot be over 60 characters. </p-message>
                                                </small>
                                            }
                                        }
                                    </div>
                                </div>
                            </div>

                            <label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password id="password" formControlName="password" placeholder="Password" [toggleMask]="true" [fluid]="true" [feedback]="false" styleClass="mb-4"></p-password>

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

                            <label for="confirmPassword" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Confirm password</label>
                            <p-password id="confirmPassword" formControlName="confirmPassword" placeholder="Confirm password" [toggleMask]="true" [fluid]="true" [feedback]="false" class="mb-4"></p-password>

                            @if (confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors?.['required']) {
                                <small class="block p-error mb-4">
                                    <p-message severity="error" variant="simple" size="small">Please confirm your password. </p-message>
                                </small>
                            }

                            @if (form.errors?.['passwordsNotMatching'] && confirmPassword.value) {
                                <small class="block p-error mb-4">
                                    <p-message severity="error" variant="simple" size="small">Passwords do not match. </p-message>
                                </small>
                            }

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <a class="font-medium no-underline text-right cursor-pointer text-primary" routerLink="/auth/sign-in">Have any account? Sign in</a>
                                <a class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</a>
                            </div>

                            @if (form.errors?.['api']) {
                                @for (item of Object.entries(form.errors?.['api']); track item[0]) {
                                    <small class="block p-error mb-4">
                                        <p-message severity="error" variant="simple" size="small">{{ item[1] }}</p-message>
                                    </small>
                                }
                            }

                            <p-button icon="pi pi-user-plus" [loading]="loading()" label="Sign Up" styleClass="w-full mt-2" type="submit" [disabled]="form.invalid"></p-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class SignUp {
    loading = signal(false);

    constructor(
        public form: SignUpForm,
        private readonly signUpGQL: SignUpGQL,
        private readonly router: Router,
        private readonly loggerService: LoggerService
    ) {
        this.form.valueChanges.subscribe(() => console.log(this.form.errors));
    }

    get email() {
        return this.form.controls.email;
    }

    get password() {
        return this.form.controls.password;
    }

    get confirmPassword() {
        return this.form.controls.confirmPassword;
    }

    get firstName() {
        return this.form.controls.firstName;
    }

    get lastName() {
        return this.form.controls.lastName;
    }

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const { confirmPassword, ...data } = this.form.getRawValue();

        this.loading.set(true);

        this.signUpGQL
            .mutate({
                variables: { data }
            })
            .pipe(
                switchMap((res) => {
                    const user = res.data?.signUp;

                    if (user) {
                        this.loggerService.info(user);

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

    protected readonly Object = Object;
}
