import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Guard that prevents authenticated users from accessing auth pages (sign-in, sign-up, etc.)
 * Redirects to home page if already logged in.
 */
export const guestGuard: CanActivateFn = async () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    await authService.waitForAuthCheck();

    const isAuthenticated = authService.isAuthenticated$.value;
    const twoFactorRequired = authService.twoFactorRequired();

    // If user is fully authenticated (logged in and no pending 2FA), redirect to home
    if (isAuthenticated && !twoFactorRequired) {
        router.navigate(['/']);
        return false;
    }

    // Allow access to auth pages for non-authenticated users or those with pending 2FA
    return true;
};
