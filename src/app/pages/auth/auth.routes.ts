import { Routes } from '@angular/router';
import { Access } from './access';
import { Error } from './error';
import { ForgotPassword } from '@/app/pages/auth/forgot-password';
import { ResetPassword } from '@/app/pages/auth/reset-password';
import { SignUp } from '@/app/pages/auth/sign-up';
import { SignIn } from '@/app/pages/auth/sign-in';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'sign-in', component: SignIn },
    { path: 'sign-up', component: SignUp },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'reset-password', component: ResetPassword }
] as Routes;
