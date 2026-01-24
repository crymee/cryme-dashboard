import { Routes } from '@angular/router';
import { Access } from './access';
import { Error } from './error';
import { ForgotPassword } from '@/app/pages/auth/forgot-password';
import { ResetPassword } from '@/app/pages/auth/reset-password';
import { SignUp } from '@/app/pages/auth/sign-up';
import { SignIn } from '@/app/pages/auth/sign-in';
import { VerifyTwoFactorComponent } from '@/app/pages/auth/verify-two-factor';
import { guestGuard } from '@/app/services/guest.guard';

import { twoFactorGuard } from '@/app/services/two-factor.guard';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'sign-in', component: SignIn, canActivate: [guestGuard] },
    { path: 'sign-up', component: SignUp, canActivate: [guestGuard] },
    { path: 'forgot-password', component: ForgotPassword, canActivate: [guestGuard] },
    { path: 'reset-password', component: ResetPassword },
    { path: 'verify-two-factor', component: VerifyTwoFactorComponent, canActivate: [twoFactorGuard] }
] as Routes;

