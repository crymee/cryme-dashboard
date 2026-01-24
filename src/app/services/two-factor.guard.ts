import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const twoFactorGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.twoFactorRequired()) {
        return true;
    }

    return router.createUrlTree(['/auth/sign-in']);
};
