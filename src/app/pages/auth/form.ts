import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Injectable, Provider } from '@angular/core';
import { CombinedGraphQLErrors } from '@apollo/client/core';
import { errorMessages } from '@/app/utils/error';

export function passwordMatcher(control: AbstractControl): ValidationErrors | null {
    const { password, confirmPassword } = control.value;

    if (password === confirmPassword) {
        return null;
    } else {
        return { passwordsNotMatching: true };
    }
}

export type SignUpFormType = {
    email: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
};

export class BaseFormGroup<T extends Record<string, AbstractControl>> extends FormGroup<T> {
    onApiError(e: CombinedGraphQLErrors) {
        this.setErrors({
            api: errorMessages(e)
        });
    }
}

@Injectable()
export class SignUpForm extends BaseFormGroup<SignUpFormType> {
    constructor(private readonly fb: FormBuilder) {
        super(
            {
                email: fb.nonNullable.control('', [Validators.required, Validators.email]),
                firstName: fb.nonNullable.control('', [Validators.required, Validators.maxLength(60)]),
                lastName: fb.nonNullable.control('', [Validators.required, Validators.maxLength(60)]),
                password: fb.nonNullable.control('', [Validators.required, Validators.minLength(8)]),
                confirmPassword: fb.nonNullable.control('', [Validators.required])
            },
            {
                validators: passwordMatcher
            }
        );
    }
}

export type SignInFormType = {
    email: FormControl<string>;
    password: FormControl<string>;
};

@Injectable()
export class SignInForm extends BaseFormGroup<SignInFormType> {
    constructor(private readonly fb: FormBuilder) {
        super({
            email: fb.nonNullable.control('', [Validators.required, Validators.email]),
            password: fb.nonNullable.control('', [Validators.required, Validators.minLength(8)])
        });
    }
}

export const SIGN_UP_FORM_PROVIDER: Provider = {
    provide: SignUpForm,
    useFactory: (fb: FormBuilder) => {
        return new SignUpForm(fb);
    },
    deps: [FormBuilder]
};

export const SIGN_IN_FORM_PROVIDER: Provider = {
    provide: SignInForm,
    useFactory: (fb: FormBuilder) => {
        return new SignInForm(fb);
    },
    deps: [FormBuilder]
};
