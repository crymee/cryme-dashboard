import { Component } from '@angular/core';
import { TwoFactorSetupComponent } from '@/app/components/two-factor-setup/two-factor-setup.component';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [TwoFactorSetupComponent],
    template: `
        <div class="max-w-3xl mx-auto">
            <div class="mb-6">
                <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0">Settings</h1>
                <p class="text-surface-600 dark:text-surface-400 mt-1">Manage your account preferences and security</p>
            </div>

            <!-- Security Section -->
            <div class="bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 overflow-hidden">
                <div class="p-4 border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                            <i class="pi pi-shield text-lg"></i>
                        </div>
                        <div>
                            <h2 class="font-semibold text-surface-900 dark:text-surface-0">Security</h2>
                            <p class="text-sm text-surface-600 dark:text-surface-400">Two-Factor Authentication</p>
                        </div>
                    </div>
                </div>

                <div class="p-6">
                    <app-two-factor-setup></app-two-factor-setup>
                </div>
            </div>
        </div>
    `
})
export class Settings {}
