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
        requiresTwoFactor
        twoFactorMethod
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
            twoFactorEnabled
            twoFactorMethod
            currentSessionId
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
            requiresTwoFactor
            twoFactorMethod
            totpEnabled
            emailEnabled
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

export const ENABLE_TOTP_MUTATION = gql`
    mutation EnableTOTP {
        enableTOTP {
            secret
            qrCodeImage
            backupCodes
        }
    }
`;

export const VERIFY_TOTP_SETUP_MUTATION = gql`
    mutation VerifyTOTPSetup($data: TOTPSetupInput!) {
        verifyTOTPSetup(data: $data) {
            backupCodes
        }
    }
`;

export const DISABLE_TWO_FACTOR_MUTATION = gql`
    mutation DisableTwoFactor {
        disableTwoFactor
    }
`;

export const DISABLE_TOTP_MUTATION = gql`
    mutation DisableTOTP {
        disableTOTP
    }
`;

export const DISABLE_EMAIL_2FA_MUTATION = gql`
    mutation DisableEmail2FA {
        disableEmail2FA
    }
`;

export const VERIFY_TWO_FACTOR_CODE_MUTATION = gql`
    mutation VerifyTwoFactorCode($data: String!) {
        verifyTwoFactorCode(data: $data)
    }
`;

export const GENERATE_BACKUP_CODES_MUTATION = gql`
    mutation GenerateBackupCodes {
        generateBackupCodes {
            backupCodes
        }
    }
`;

export const ENABLE_EMAIL_2FA_MUTATION = gql`
    mutation EnableEmail2FA {
        enableEmail2FA
    }
`;

export const VERIFY_EMAIL_2FA_CODE_MUTATION = gql`
    mutation VerifyEmail2FACode($data: String!) {
        verifyEmail2FACode(data: $data) {
            backupCodes
        }
    }
`;

export const RESEND_EMAIL_2FA_CODE_MUTATION = gql`
    mutation ResendEmail2FACode {
        resendEmail2FACode
    }
`;

export const TWO_FACTOR_STATUS_QUERY = gql`
    query TwoFactorStatus {
        twoFactorStatus {
            enabled
            method
            totpEnabled
            emailEnabled
            hasBackupCodes
        }
    }
`;

export const ACTIVE_SESSIONS_QUERY = gql`
    query ActiveSessions {
        activeSessions {
            id
            ipAddress
            userAgent
            location
            lastActive
            createdAt
            expiresAt
        }
    }
`;

export const REVOKE_SESSION_MUTATION = gql`
    mutation RevokeSession($id: ID!) {
        revokeSession(id: $id)
    }
`;

export const WEBHOOKS_QUERY = gql`
    query Webhooks {
        webhooks {
            id
            url
            secret
            isActive
            events
            createdAt
        }
    }
`;

export const REGISTER_WEBHOOK_MUTATION = gql`
    mutation RegisterWebhook($url: String!, $events: [String!]!) {
        registerWebhook(url: $url, events: $events) {
            id
            url
            secret
            isActive
            events
            createdAt
        }
    }
`;

export const DELETE_WEBHOOK_MUTATION = gql`
    mutation DeleteWebhook($id: ID!) {
        deleteWebhook(id: $id)
    }
`;
export const FILES_QUERY = gql`
    query Files {
        files {
            id
            filename
            mimetype
            sizeBytes
            storageType
            createdAt
        }
    }
`;
export const NOTIFICATIONS_QUERY = gql`
    query Notifications {
        notifications {
            id
            title
            message
            type
            isRead
            link
            createdAt
        }
    }
`;

export const MARK_NOTIFICATION_AS_READ_MUTATION = gql`
    mutation MarkNotificationAsRead($id: ID!) {
        markNotificationAsRead(id: $id)
    }
`;

export const MARK_ALL_NOTIFICATIONS_AS_READ_MUTATION = gql`
    mutation MarkAllNotificationsAsRead {
        markAllNotificationsAsRead
    }
`;
