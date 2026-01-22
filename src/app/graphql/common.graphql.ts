import { gql } from 'apollo-angular';

export const USER_SELECT_ITEM_FRAGMENT = gql`
    fragment UserSelectItem on UserSelectItem {
        id
        email
        lastName
        firstName
    }
`;

export const USER_ITEM_FRAGMENT = gql`
    fragment UserItem on UserItem {
        id
        email
        lastName
        firstName
    }
`;

export const AUTH_PAYLOAD_FRAGMENT = gql`
    fragment AuthPayload on AuthPayload {
        user {
            ...UserItem
        }
        sessionId
    }
    ${USER_ITEM_FRAGMENT}
`;

export const USERS_QUERY = gql`
    query Users {
        users {
            ...UserSelectItem
        }
    }
    ${USER_SELECT_ITEM_FRAGMENT}
`;

export const ME_QUERY = gql`
    query Me {
        me {
            id
            email
            lastName
            firstName
        }
    }
`;

export const SIGN_UP_MUTATION = gql`
    mutation SignUp($data: SignUpInput!) {
        signUp(data: $data) {
            id
            email
            lastName
            firstName
        }
    }
`;

export const SIGN_IN_MUTATION = gql`
    mutation SignIn($data: SignInInput!) {
        signIn(data: $data) {
            user {
                id
                email
                lastName
                firstName
            }
            sessionId
        }
    }
`;

export const LOGOUT_MUTATION = gql`
    mutation Logout {
        logout
    }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
    mutation ForgotPassword($data: ForgotPasswordInput!) {
        forgotPassword(data: $data)
    }
`;

export const RESET_PASSWORD_MUTATION = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
        resetPassword(data: $data)
    }
`;
