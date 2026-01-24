import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputOtpModule } from 'primeng/inputotp';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { TwoFactorService } from '@/app/services/two-factor.service';
import { AuthService } from '@/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';

@Component({
	selector: 'app-two-factor-setup',
	standalone: true,
	imports: [
		CommonModule,
		ButtonModule,
		InputTextModule,
		InputOtpModule,
		MessageModule,
		CheckboxModule,
		RippleModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	template: `
		<!-- Messages -->
		@if (errorMessage()) {
			<p-message severity="error" styleClass="w-full mb-4">{{ errorMessage() }}</p-message>
		}
		@if (successMessage()) {
			<p-message severity="success" styleClass="w-full mb-4">{{ successMessage() }}</p-message>
		}

		<!-- Main Status View -->
		@if (currentStep() === 'main' && !showBackupCodes()) {
			<div class="flex flex-col gap-4">
				<!-- TOTP Method Card -->
				<div class="p-4 rounded-xl border-2 transition-all"
					[style.order]="totpEnabled() ? 0 : 1"
					[class.border-primary-500]="totpEnabled()"
					[class.bg-primary-50]="totpEnabled()"
					[class.dark:bg-primary-500/10]="totpEnabled()"
					[class.border-surface-200]="!totpEnabled()"
					[class.dark:border-surface-700]="!totpEnabled()"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-lg flex items-center justify-center"
								[class.bg-primary-100]="totpEnabled()"
								[class.dark:bg-primary-500/20]="totpEnabled()"
								[class.text-primary-600]="totpEnabled()"
								[class.bg-surface-100]="!totpEnabled()"
								[class.dark:bg-surface-800]="!totpEnabled()"
								[class.text-surface-500]="!totpEnabled()"
							>
								<i class="pi pi-mobile text-xl"></i>
							</div>
							<div>
								<div class="font-semibold text-surface-900 dark:text-surface-0">Authenticator App</div>
								<div class="text-sm text-surface-500 dark:text-surface-400">
									@if (totpEnabled()) {
										<span class="text-primary-600 dark:text-primary-400">Enabled</span> • Recommended
									} @else {
										Google/Microsoft Authenticator
									}
								</div>
							</div>
						</div>
						<div>
							@if (totpEnabled()) {
								<p-button
									icon="pi pi-times"
									label="Disable"
									severity="secondary"
									[outlined]="true"
									size="small"
									[loading]="loading()"
									(click)="disableTOTP()"
									styleClass="!rounded-lg"
								></p-button>
							} @else {
								<p-button
									icon="pi pi-plus"
									label="Enable"
									size="small"
									[loading]="loading()"
									(click)="startTOTPSetup()"
									styleClass="!rounded-lg"
								></p-button>
							}
						</div>
					</div>
				</div>

				<!-- Email Method Card -->
				<div class="p-4 rounded-xl border-2 transition-all"
					[style.order]="emailEnabled() ? 0 : 1"
					[class.border-primary-500]="emailEnabled()"
					[class.bg-primary-50]="emailEnabled()"
					[class.dark:bg-primary-500/10]="emailEnabled()"
					[class.border-surface-200]="!emailEnabled()"
					[class.dark:border-surface-700]="!emailEnabled()"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-lg flex items-center justify-center"
								[class.bg-primary-100]="emailEnabled()"
								[class.dark:bg-primary-500/20]="emailEnabled()"
								[class.text-primary-600]="emailEnabled()"
								[class.bg-surface-100]="!emailEnabled()"
								[class.dark:bg-surface-800]="!emailEnabled()"
								[class.text-surface-500]="!emailEnabled()"
							>
								<i class="pi pi-envelope text-xl"></i>
							</div>
							<div>
								<div class="font-semibold text-surface-900 dark:text-surface-0">Email Code</div>
								<div class="text-sm text-surface-500 dark:text-surface-400">
									@if (emailEnabled()) {
										<span class="text-primary-600 dark:text-primary-400">Enabled</span> • Backup option
									} @else {
										One-time codes via email
									}
								</div>
							</div>
						</div>
						<div>
							@if (emailEnabled()) {
								<p-button
									icon="pi pi-times"
									label="Disable"
									severity="secondary"
									[outlined]="true"
									size="small"
									[loading]="loading()"
									(click)="disableEmail()"
									styleClass="!rounded-lg"
								></p-button>
							} @else {
								<p-button
									icon="pi pi-plus"
									label="Enable"
									size="small"
									[loading]="loading()"
									(click)="startEmailSetup()"
									styleClass="!rounded-lg"
								></p-button>
							}
						</div>
					</div>
				</div>

				<!-- Backup Codes Action (only show if any method is enabled) -->
				@if (totpEnabled() || emailEnabled()) {
					<div class="pt-2 flex justify-end" style="order: 99">
						<p-button
							icon="pi pi-key"
							label="Generate Backup Codes"
							severity="secondary"
							[outlined]="true"
							size="small"
							[loading]="loading()"
							(click)="generateNewBackupCodes()"
							styleClass="!rounded-lg"
						></p-button>
					</div>
				}
			</div>
		}

		<!-- TOTP Setup -->
		@if (currentStep() === 'totp-setup' && totpData()) {
			<div class="space-y-6">
				<div class="flex gap-6 p-6 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
					<div class="shrink-0">
						<div class="bg-white p-4 rounded-xl shadow-sm">
							<img [src]="totpData()?.qrCodeImage" alt="QR Code" class="w-36 h-36" />
						</div>
					</div>
					<div class="flex-1 space-y-4">
						<div>
							<div class="font-semibold text-surface-900 dark:text-surface-0 mb-2">
								<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white text-sm mr-2">1</span>
								Scan QR Code
							</div>
							<p class="text-surface-600 dark:text-surface-400 text-sm">
								Open your authenticator app and scan this code. Or enter manually:
							</p>
							<code class="block mt-2 p-2 rounded-lg bg-surface-100 dark:bg-surface-700 text-primary-600 dark:text-primary-400 font-mono text-sm select-all break-all">
								{{ totpData()?.secret }}
							</code>
						</div>
						<div>
							<div class="font-semibold text-surface-900 dark:text-surface-0 mb-4">
								<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white text-sm mr-2">2</span>
								Enter Verification Code
							</div>
							<form [formGroup]="verificationForm" (ngSubmit)="verifyTOTP()" class="flex flex-col gap-4">
								<div class="flex justify-center">
									<p-inputOtp 
										formControlName="verificationCode" 
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
												(paste)="onPasteTOTP($event)"
												class="w-11 h-12 sm:w-14 sm:h-16 text-2xl sm:text-3xl font-bold text-center border-2 rounded-xl bg-surface-0 dark:bg-surface-800 border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0 focus:border-primary-500 hover:border-surface-400 dark:hover:border-surface-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-200 outline-none appearance-none shadow-sm"
												[value]="token || ''"
											/>
										</ng-template>
									</p-inputOtp>
								</div>
								<p-button
									label="Verify & Enable"
									[loading]="loading()"
									[disabled]="verificationForm.invalid"
									type="submit"
									styleClass="w-full !rounded-xl"
								></p-button>
								<p-button
									label="Cancel"
									severity="secondary"
									[outlined]="true"
									(click)="cancel()"
									styleClass="w-full !rounded-xl"
								></p-button>
							</form>
						</div>
					</div>
				</div>
			</div>
		}

		<!-- Email Setup -->
		@if (currentStep() === 'email-setup') {
			<div class="space-y-6">
				<div class="text-center py-6 px-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
					<div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400">
						<i class="pi pi-envelope text-3xl"></i>
					</div>
					@if (!codeSent()) {
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Email Authentication</h3>
						<p class="text-surface-600 dark:text-surface-400 mb-6">Click below to send a verification code to your email address.</p>
						
						<div class="flex flex-col gap-3">
							<p-button
								label="Send Verification Code"
								[loading]="loading()"
								(click)="sendInitialEmailCode()"
								styleClass="w-full !rounded-xl !py-3 !font-semibold"
							></p-button>
							<p-button
								label="Cancel"
								severity="secondary"
								[outlined]="true"
								(click)="cancel()"
								styleClass="w-full !rounded-xl"
							></p-button>
						</div>
					} @else {
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Check Your Email</h3>
						<p class="text-surface-600 dark:text-surface-400">Enter the 6-digit code we sent to your email address.</p>
					}
				</div>

				@if (codeSent()) {
					<form [formGroup]="emailVerificationForm" (ngSubmit)="verifyEmail2FA()" class="flex flex-col gap-4">
						<div class="flex justify-center">
							<p-inputOtp 
								formControlName="emailCode" 
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
										(paste)="onPasteEmail($event)"
										class="w-11 h-12 sm:w-14 sm:h-16 text-2xl sm:text-3xl font-bold text-center border-2 rounded-xl bg-surface-0 dark:bg-surface-800 border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0 focus:border-primary-500 hover:border-surface-400 dark:hover:border-surface-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-200 outline-none appearance-none shadow-sm"
										[value]="token || ''"
									/>
								</ng-template>
							</p-inputOtp>
						</div>

						<p-button
							label="Verify & Enable"
							[loading]="loading()"
							[disabled]="emailVerificationForm.invalid"
							type="submit"
							styleClass="w-full !rounded-xl !py-3 !font-semibold"
						></p-button>

						<div class="flex gap-2 mt-2">
							<p-button
								label="Resend Code"
								severity="secondary"
								[outlined]="true"
								[loading]="loading()"
								(click)="resendEmailCode()"
								styleClass="flex-1 !rounded-xl"
							></p-button>
							<p-button
								label="Cancel"
								severity="secondary"
								[outlined]="true"
								(click)="cancel()"
								styleClass="flex-1 !rounded-xl"
							></p-button>
						</div>
					</form>
				}
			</div>
		}

		<!-- Backup Codes -->
		@if (showBackupCodes() && backupCodes()) {
			<div class="space-y-4">
				<div class="flex items-center gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
					<div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
						<i class="pi pi-key text-xl"></i>
					</div>
					<div>
						<div class="font-semibold text-amber-800 dark:text-amber-200">Backup Recovery Codes</div>
						<div class="text-sm text-amber-600 dark:text-amber-400">Save these codes in a safe place. Each code can only be used once.</div>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-2 p-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
					@for (code of backupCodes()!; track code) {
						<div class="p-3 rounded-lg bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 font-mono text-center text-sm select-all">
							{{ code }}
						</div>
					}
				</div>

				<div class="flex gap-2">
					<p-button
						icon="pi pi-download"
						label="Download Codes"
						(click)="downloadBackupCodes()"
						styleClass="flex-1 !rounded-xl"
					></p-button>
					<p-button
						label="Done"
						severity="secondary"
						[outlined]="true"
						(click)="done()"
						styleClass="flex-1 !rounded-xl"
					></p-button>
				</div>
			</div>
		}
	`
})
export class TwoFactorSetupComponent {
	errorMessage = signal<string>('');
	successMessage = signal<string>('');
	totpEnabled = signal(false);
	emailEnabled = signal(false);
	currentStep = signal<'main' | 'totp-setup' | 'email-setup'>('main');
	totpData = signal<{ secret: string; qrCodeImage: string; backupCodes: string[] } | null>(null);
	backupCodes = signal<string[] | null>(null);
	showBackupCodes = signal(false);
	loading = signal(false);

	verificationForm: FormGroup;
	emailVerificationForm: FormGroup;
	codeSent = signal(false);

	constructor(
		public twoFactorService: TwoFactorService,
		private authService: AuthService,
		private router: Router,
		private fb: FormBuilder,
		private apollo: Apollo
	) {
		this.verificationForm = this.fb.group({
			verificationCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
		});

		this.emailVerificationForm = this.fb.group({
			emailCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
		});

		this.loadStatus();
	}

	async loadStatus() {
		try {
			const status = await this.twoFactorService.getTwoFactorStatus();
			this.totpEnabled.set(status.totpEnabled || false);
			this.emailEnabled.set(status.emailEnabled || false);
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Failed to load 2FA status');
		}
	}

	async startTOTPSetup() {
		this.loading.set(true);
		this.errorMessage.set('');
		this.successMessage.set('');

		try {
			const data = await this.twoFactorService.enableTOTP();
			this.totpData.set(data as unknown as { secret: string; qrCodeImage: string; backupCodes: string[] });
			this.currentStep.set('totp-setup');
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Failed to start TOTP setup');
		} finally {
			this.loading.set(false);
		}
	}

	async startEmailSetup() {
		this.errorMessage.set('');
		this.successMessage.set('');
		this.codeSent.set(false);
		this.currentStep.set('email-setup');
	}

	async sendInitialEmailCode() {
		this.loading.set(true);
		this.errorMessage.set('');
		this.successMessage.set('');

		try {
			await this.twoFactorService.enableEmail2FA();
			this.codeSent.set(true);
			this.successMessage.set('Verification code sent');
		} catch (e: any) {
			this.successMessage.set('');
			this.errorMessage.set(e.message || 'Failed to send code');
		} finally {
			this.loading.set(false);
		}
	}

	async verifyTOTP() {
		if (this.verificationForm.invalid) return;
		this.loading.set(true);
		this.errorMessage.set('');

		try {
			const code = this.verificationForm.value.verificationCode;
			const secret = this.totpData()?.secret;
			if (!secret) return;

			const codes = await this.twoFactorService.verifyTOTPSetup(code, secret);
			this.backupCodes.set(codes);
			this.showBackupCodes.set(true);
			this.totpEnabled.set(true);
			this.successMessage.set('Authenticator app enabled successfully!');
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Invalid verification code');
		} finally {
			this.loading.set(false);
		}
	}

	async verifyEmail2FA() {
		if (this.emailVerificationForm.invalid) return;
		this.loading.set(true);
		this.errorMessage.set('');

		try {
			const code = this.emailVerificationForm.value.emailCode;
			const codes = await this.twoFactorService.verifyEmail2FACode(code);
			if (codes && codes.length > 0) {
				this.backupCodes.set(codes);
				this.showBackupCodes.set(true);
			}
			this.emailEnabled.set(true);
			this.successMessage.set('Email 2FA enabled successfully!');
			if (!codes || codes.length === 0) {
				this.currentStep.set('main');
			}
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Invalid verification code');
		} finally {
			this.loading.set(false);
		}
	}

	async resendEmailCode() {
		this.loading.set(true);
		this.errorMessage.set('');
		this.successMessage.set('');
		try {
			await this.twoFactorService.resendEmail2FACode();
			this.successMessage.set('New verification code sent to your email');
		} catch (e: any) {
			this.successMessage.set('');
			this.errorMessage.set(e.message || 'Failed to resend code');
		} finally {
			this.loading.set(false);
		}
	}

	async disableTOTP() {
		this.loading.set(true);
		this.errorMessage.set('');
		try {
			await this.twoFactorService.disableTOTP();
			this.totpEnabled.set(false);
			this.successMessage.set('Authenticator app disabled');
			// Reload status to check if other method is still enabled
			this.loadStatus();
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Failed to disable');
		} finally {
			this.loading.set(false);
		}
	}

	async disableEmail() {
		this.loading.set(true);
		this.errorMessage.set('');
		try {
			await this.twoFactorService.disableEmail2FA();
			this.emailEnabled.set(false);
			this.successMessage.set('Email 2FA disabled');
			// Reload status to check if other method is still enabled
			this.loadStatus();
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Failed to disable');
		} finally {
			this.loading.set(false);
		}
	}

	async generateNewBackupCodes() {
		this.loading.set(true);
		this.errorMessage.set('');
		try {
			const codes = await this.twoFactorService.generateBackupCodes();
			this.backupCodes.set(codes);
			this.showBackupCodes.set(true);
		} catch (e: any) {
			this.errorMessage.set(e.message || 'Failed to generate backup codes');
		} finally {
			this.loading.set(false);
		}
	}

	downloadBackupCodes() {
		if (!this.backupCodes()) return;
		const text = this.backupCodes()!.join('\n');
		const blob = new Blob([text], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'backup-codes.txt';
		a.click();
		URL.revokeObjectURL(url);
	}

	cancel() {
		this.currentStep.set('main');
		this.totpData.set(null);
		this.verificationForm.reset();
		this.emailVerificationForm.reset();
		this.errorMessage.set('');
		this.successMessage.set('');
	}

	done() {
		this.showBackupCodes.set(false);
		this.backupCodes.set(null);
		this.currentStep.set('main');
	}

	onPasteTOTP(event: ClipboardEvent) {
		const clipboardData = event.clipboardData;
		const pastedText = clipboardData?.getData('text');

		if (pastedText) {
			const cleanText = pastedText.replace(/\D/g, '').slice(0, 6);

			if (cleanText.length > 1) {
				event.preventDefault();
				this.verificationForm.controls['verificationCode'].setValue(cleanText);
				this.verificationForm.markAsDirty();
			}
		}
	}

	onPasteEmail(event: ClipboardEvent) {
		const clipboardData = event.clipboardData;
		const pastedText = clipboardData?.getData('text');

		if (pastedText) {
			const cleanText = pastedText.replace(/\D/g, '').slice(0, 6);

			if (cleanText.length > 1) {
				event.preventDefault();
				this.emailVerificationForm.controls['emailCode'].setValue(cleanText);
				this.emailVerificationForm.markAsDirty();
			}
		}
	}
}
