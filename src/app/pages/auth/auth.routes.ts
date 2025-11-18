import { Routes } from '@angular/router';
import { Access } from './access';
import { Error } from './error';
import { SignUp } from '@/app/pages/auth/sign-up';
import { SignIn } from '@/app/pages/auth/sign-in';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'sign-in', component: SignIn },
    { path: 'sign-up', component: SignUp }
] as Routes;
