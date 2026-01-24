import { Injectable, signal } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import {
	DisableTwoFactorGQL,
	EnableEmail2FaGQL,
	EnableTotpGQL,
	GenerateBackupCodesGQL,
	ResendEmail2FaCodeGQL,
	TwoFactorStatusGQL,
	VerifyEmail2FaCodeGQL,
	VerifyTotpSetupGQL,
	VerifyTwoFactorCodeGQL,
	type EnableTotpMutation,
	type EnableTotpMutationVariables,
	type VerifyTotpSetupMutation,
	type DisableTwoFactorMutation,
	type DisableTwoFactorMutationVariables,
	type VerifyTwoFactorCodeMutation,
	type GenerateBackupCodesMutation,
	type GenerateBackupCodesMutationVariables,
	type EnableEmail2FaMutation,
	type EnableEmail2FaMutationVariables,
	type VerifyEmail2FaCodeMutation,
	type ResendEmail2FaCodeMutation,
	type TwoFactorStatusQuery,
	type TwoFactorStatusQueryVariables,
} from '@generated/generated';
import {
	DISABLE_TWO_FACTOR_MUTATION,
	ENABLE_EMAIL_2FA_MUTATION,
	ENABLE_TOTP_MUTATION,
	GENERATE_BACKUP_CODES_MUTATION,
	RESEND_EMAIL_2FA_CODE_MUTATION,
	TWO_FACTOR_STATUS_QUERY,
	VERIFY_EMAIL_2FA_CODE_MUTATION,
	VERIFY_TOTP_SETUP_MUTATION,
	VERIFY_TWO_FACTOR_CODE_MUTATION,
	DISABLE_TOTP_MUTATION,
	DISABLE_EMAIL_2FA_MUTATION
} from '@/app/graphql/common.graphql';

export interface TwoFactorStatus {
	enabled: boolean;
	method: 'totp' | 'email' | null;
	totpEnabled: boolean;
	emailEnabled: boolean;
	hasBackupCodes: boolean;
}

export interface TOTPSetupData {
	secret: string;
	qrCodeImage: string;
	backupCodes: Array<string | null>;
}

@Injectable({
	providedIn: 'root'
})
export class TwoFactorService {
	loading = signal(false);
	error = signal<string>('');

	constructor(private apollo: Apollo) { }

	async enableTOTP(): Promise<TOTPSetupData> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new EnableTotpGQL(this.apollo).mutate()
			);

			const data = result.data?.enableTOTP;
			if (data) {
				return data;
			}

			throw new Error('Failed to enable TOTP');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to enable TOTP');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async verifyTOTPSetup(code: string, secret: string): Promise<string[]> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new VerifyTotpSetupGQL(this.apollo).mutate({ variables: { data: { code, secret } } })
			);

			if (result.data?.verifyTOTPSetup?.backupCodes) {
				return result.data.verifyTOTPSetup.backupCodes as string[];
			}

			throw new Error('Failed to verify TOTP setup');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to verify TOTP setup');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async disableTwoFactor(): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new DisableTwoFactorGQL(this.apollo).mutate()
			);

			if (result.data?.disableTwoFactor) {
				return;
			}

			throw new Error('Failed to disable two-factor authentication');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to disable two-factor authentication');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async disableTOTP(): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				this.apollo.mutate({ mutation: DISABLE_TOTP_MUTATION })
			);

			if (result.data) {
				return;
			}

			throw new Error('Failed to disable TOTP');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to disable TOTP');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async disableEmail2FA(): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				this.apollo.mutate({ mutation: DISABLE_EMAIL_2FA_MUTATION })
			);

			if (result.data) {
				return;
			}

			throw new Error('Failed to disable Email 2FA');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to disable Email 2FA');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async verifyTwoFactorCode(code: string): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new VerifyTwoFactorCodeGQL(this.apollo).mutate({ variables: { data: code } })
			);

			if (result.data?.verifyTwoFactorCode) {
				return;
			}

			throw new Error('Failed to verify two-factor code');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to verify two-factor code');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async generateBackupCodes(): Promise<string[]> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new GenerateBackupCodesGQL(this.apollo).mutate()
			);

			const data = result.data?.generateBackupCodes;
			if (data?.backupCodes) {
				return data.backupCodes as string[];
			}

			throw new Error('Failed to generate backup codes');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to generate backup codes');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async enableEmail2FA(): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new EnableEmail2FaGQL(this.apollo).mutate()
			);

			if (result.data?.enableEmail2FA) {
				return;
			}

			throw new Error('Failed to enable email 2FA');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to enable email 2FA');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async verifyEmail2FACode(code: string): Promise<string[]> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new VerifyEmail2FaCodeGQL(this.apollo).mutate({ variables: { data: code } })
			);

			if (result.data?.verifyEmail2FACode?.backupCodes) {
				return result.data.verifyEmail2FACode.backupCodes as string[];
			}

			throw new Error('Failed to verify email 2FA code');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to verify email 2FA code');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async resendEmail2FACode(): Promise<void> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				new ResendEmail2FaCodeGQL(this.apollo).mutate()
			);

			if (result.data?.resendEmail2FACode) {
				return;
			}

			throw new Error('Failed to resend email 2FA code');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to resend email 2FA code');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}

	async getTwoFactorStatus(): Promise<TwoFactorStatus> {
		this.loading.set(true);
		this.error.set('');

		try {
			const result = await firstValueFrom(
				this.apollo.query<{ twoFactorStatus: TwoFactorStatus }>({
					query: TWO_FACTOR_STATUS_QUERY,
					fetchPolicy: 'network-only'
				})
			);

			const data = result.data?.twoFactorStatus;
			if (data) {
				return data as TwoFactorStatus;
			}

			throw new Error('Failed to get 2FA status');
		} catch (e: any) {
			this.error.set(e.message || 'Failed to get 2FA status');
			throw e;
		} finally {
			this.loading.set(false);
		}
	}
}
