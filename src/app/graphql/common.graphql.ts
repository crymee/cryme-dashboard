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
`;

export const USERS_QUERY = gql`
    query Users {
        users {
            ...UserSelectItem
        }
    }
`;

export const SIGN_UP_MUTATION = gql`
    mutation SignUp($data: SignUpInput!) {
        signUp(data: $data) {
            ...UserItem
        }
    }
`;

export const SIGN_IN_MUTATION = gql`
    mutation SignIn($data: SignInInput!) {
        signIn(data: $data) {
            ...AuthPayload
        }
    }
`;
