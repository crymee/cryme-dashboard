import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '@/app/layout/component/app.floatingconfigurator';
import { VerifyEmailGQL } from '@generated/generated';

@Component({
    selector: 'app-verify-email',
    imports: [CommonModule, ButtonModule, RouterModule, RippleModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center w-full max-w-lg">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full min-w-[350px] bg-surface-0 dark:bg-surface-900 py-10 px-8 sm:px-12" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Email Verification</div>
                            
                            @if (loading()) {
                                <i class="pi pi-spin pi-spinner text-4xl text-primary mb-4"></i>
                                <div class="text-muted-color font-medium">Verifying your email...</div>
                            } @else if (success()) {
                                <i class="pi pi-check-circle text-4xl text-green-500 mb-4"></i>
                                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Email verified successfully!</div>
                                <p-button label="Sign In" routerLink="/auth/sign-in" styleClass="w-full"></p-button>
                            } @else {
                                <i class="pi pi-times-circle text-4xl text-red-500 mb-4"></i>
                                <div class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Verification Failed</div>
                                <div class="text-muted-color mb-6">{{ error() }}</div>
                                <p-button label="Back to Sign In" routerLink="/auth/sign-in" styleClass="w-full" severity="secondary"></p-button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class VerifyEmail implements OnInit {
    loading = signal(true);
    success = signal(false);
    error = signal<string | null>(null);

    constructor(
        private route: ActivatedRoute,
        private verifyEmailGQL: VerifyEmailGQL
    ) { }

    ngOnInit() {
        const token = this.route.snapshot.queryParamMap.get('token');

        if (!token) {
            this.loading.set(false);
            this.error.set('Invalid verification link.');
            return;
        }

        this.verifyEmailGQL.mutate({ variables: { token } }).subscribe({
            next: () => {
                this.loading.set(false);
                this.success.set(true);
            },
            error: (err) => {
                this.loading.set(false);
                this.success.set(false);
                this.error.set(err.message || 'Verification failed. The link might be expired.');
            }
        });
    }
}
