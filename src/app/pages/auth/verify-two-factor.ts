import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { MessageModule } from 'primeng/message';
import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VERIFY_TWO_FACTOR_CODE_MUTATION, RESEND_EMAIL_2FA_CODE_MUTATION } from '@/app/graphql/common.graphql';
import { AuthService } from '@/app/services/auth.service';
import { firstValueFrom } from 'rxjs';
import { LoggerService } from '@/services/logger.service';
import { PusherBeamsService } from '@/app/services/push-beams.service';
import { ME_QUERY } from '@/app/graphql/common.graphql';
import { Apollo } from 'apollo-angular';
import { SharedModule } from 'primeng/api';

@Component({
    selector: 'app-verify-two-factor',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        InputOtpModule,
        ReactiveFormsModule,
        MessageModule,
        AppFloatingConfigurator,
        SharedModule,
        RouterModule
    ],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden p-4 relative">
             <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
                <div class="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>
            <div class="w-full max-w-[420px]">
                <div class="relative w-full bg-surface-0 dark:bg-surface-900 rounded-[2rem] shadow-2xl border border-surface-200 dark:border-surface-700 p-8 sm:p-12 overflow-hidden">
                    <!-- Subtle top accent -->
                    <div class="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary-400 to-primary-600"></div>

                    <div class="text-center mb-10">
                         <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 dark:bg-primary-500/10 mb-6 text-primary-600 dark:text-primary-400">
                             <i class="pi pi-lock text-4xl"></i>
                        </div>
                        <h1 class="text-surface-900 dark:text-surface-0 text-3xl font-bold mb-3">Two-Factor Auth</h1>
                        <p class="text-surface-500 dark:text-surface-400 leading-relaxed">
                            @if (isEmailMethod()) {
                                Enter the verification code we sent to your email address.
                            } @else {
                                Enter the 6-digit code from your authenticator app.
                            }
                        </p>
                    </div>

                    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-6">
                        <div class="flex justify-center">
                            <p-inputOtp 
                                formControlName="code" 
                                [length]="6" 
                                [integerOnly]="true" 
                                styleClass="gap-2 sm:gap-3"
                                [style]="{'justify-content': 'center'}"
                            >
                                <ng-template pTemplate="input" let-token let-events="events" let-index="index">
                                    <input 
                                        type="text" 
                                        [attr.maxLength]="1" 
                                        (input)="events.input($event)" 
                                        (keydown)="events.keydown($event)" 
                                        (paste)="onPaste($event)" 
                                        class="w-11 h-12 sm:w-14 sm:h-16 text-2xl sm:text-3xl font-bold text-center border-2 rounded-xl bg-surface-0 dark:bg-surface-800 border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0 focus:border-primary-500 hover:border-surface-400 dark:hover:border-surface-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-200 outline-none appearance-none shadow-sm"
                                        [value]="token || ''"
                                    />
                                </ng-template>
                            </p-inputOtp>
                        </div>

                        @if (code.invalid && (code.dirty || code.touched)) {
                            <div class="flex flex-col gap-2">
                                @if (code.errors?.['required']) {
                                    <p-message severity="error" variant="simple" size="small">Code is required.</p-message>
                                }
                                @if (code.errors?.['minlength']) {
                                    <p-message severity="error" variant="simple" size="small">Code must be 6 digits.</p-message>
                                }
                            </div>
                        }

                        @if (errorMessage()) {
                             <p-message severity="error" variant="simple" size="small">{{ errorMessage() }}</p-message>
                        }

                        <p-button 
                            label="Verify Code" 
                            [loading]="loading()" 
                            type="submit" 
                            [disabled]="form.invalid"
                            styleClass="w-full !rounded-xl !py-3 !text-lg !font-semibold"
                        ></p-button>

                        @if (isEmailMethod()) {
                            <div class="text-center mt-2">
                                <span class="text-surface-500 dark:text-surface-400 text-sm">Didn't receive code? </span>
                                <button 
                                    type="button"
                                    [disabled]="resending() || countdown() > 0"
                                    (click)="resendCode()"
                                    class="text-primary-600 dark:text-primary-400 font-medium hover:underline bg-transparent border-none cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {{ resending() ? 'Resending...' : (countdown() > 0 ? 'Resend in ' + countdown() + 's' : 'Resend') }}
                                </button>
                            </div>
                        }

                        <div class="text-center mt-4 flex flex-col gap-3">
                            @if (canSwitchMethods()) {
                                <button 
                                    type="button"
                                    (click)="switchMethod()"
                                    class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium bg-transparent border-none cursor-pointer transition-colors"
                                >
                                    {{ isEmailMethod() ? 'Use Authenticator App' : 'Use Email Code' }}
                                </button>
                            }

                            <a 
                                routerLink="/auth/sign-in" 
                                class="text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 text-sm font-medium no-underline transition-colors flex items-center justify-center gap-2"
                            >
                                <i class="pi pi-arrow-left text-xs"></i> Back to Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
})
export class VerifyTwoFactorComponent {
    loading = signal(false);
    resending = signal(false);
    countdown = signal(0);
    errorMessage = signal<string | ''>('');
    twoFactorMethod = signal<'totp' | 'email' | null>(null);

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private apollo: Apollo,
        private loggerService: LoggerService,
        private pusherBeamsService: PusherBeamsService
    ) {
        this.twoFactorMethod.set(this.authService.twoFactorMethod());
        this.form = this.fb.group({
            code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
        });
    }

    isEmailMethod = computed(() => this.twoFactorMethod() === 'email');

    canSwitchMethods = computed(() => {
        return this.authService.twoFactorTotpEnabled() && this.authService.twoFactorEmailEnabled();
    });

    switchMethod() {
        const newMethod = this.isEmailMethod() ? 'totp' : 'email';
        this.twoFactorMethod.set(newMethod);
        this.errorMessage.set('');
        this.form.reset();
    }

    get code() {
        return this.form.controls['code'];
    }

    async resendCode() {
        this.resending.set(true);
        this.errorMessage.set('');

        try {
            await firstValueFrom(
                this.apollo.mutate({
                    mutation: RESEND_EMAIL_2FA_CODE_MUTATION
                })
            );
            this.errorMessage.set('');
            this.startCountdown();
        } catch (e: any) {
            this.errorMessage.set(e.message || 'Failed to resend code');
        } finally {
            this.resending.set(false);
        }
    }

    private startCountdown() {
        this.countdown.set(60);
        const interval = setInterval(() => {
            if (this.countdown() > 0) {
                this.countdown.update(c => c - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);
    }

    onPaste(event: ClipboardEvent) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text');

        if (pastedText) {
            const cleanText = pastedText.replace(/\D/g, '').slice(0, 6);

            if (cleanText.length > 1) {
                event.preventDefault();
                this.form.controls['code'].setValue(cleanText);
                this.form.markAsDirty();
            }
        }
    }

    async onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.loading.set(true);
        this.errorMessage.set('');

        try {
            const verifyResult = await firstValueFrom(
                this.apollo.mutate<{ verifyTwoFactorCode: string }>({
                    mutation: VERIFY_TWO_FACTOR_CODE_MUTATION,
                    variables: { data: this.form.value.code }
                })
            );

            if (verifyResult.data?.verifyTwoFactorCode) {
                // Use network-only to ensure we skip the cache that says 'me' is null
                const result = await firstValueFrom(
                    this.apollo.query<{ me: any }>({
                        query: ME_QUERY,
                        fetchPolicy: 'network-only'
                    })
                );

                if (result.data?.me) {
                    try {
                        await this.pusherBeamsService.setAuthenticatedUser(result.data.me.id);
                    } catch (e) {
                        this.loggerService.error(e);
                    }

                    this.authService.setTwoFactorVerified(result.data.me);
                    await this.router.navigate(['/']);
                } else {
                    this.errorMessage.set('Authentication successful but user session could not be established. Please refresh.');
                }
            }
        } catch (e: any) {
            this.errorMessage.set(e.message || 'Invalid verification code');
            this.form.reset();
        } finally {
            this.loading.set(false);
        }
    }
}
