import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    await authService.waitForAuthCheck();

    const isAuthenticated = authService.isAuthenticated$.value;
    const twoFactorRequired = authService.twoFactorRequired();
    const currentPath = router.url;

    // Allow access to verify-two-factor route when 2FA is pending
    if (currentPath.includes('/auth/verify-two-factor') && twoFactorRequired) {
        return true;
    }

    // Redirect to sign-in if not authenticated
    if (!isAuthenticated && !twoFactorRequired) {
        router.navigate(['/auth/sign-in']);
        return false;
    }

    // Redirect to verify-two-factor if 2FA is required
    if (twoFactorRequired && !currentPath.includes('/auth/verify-two-factor')) {
        router.navigate(['/auth/verify-two-factor']);
        return false;
    }

    return true;
};
