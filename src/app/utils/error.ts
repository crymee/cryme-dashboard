import { CombinedGraphQLErrors } from '@apollo/client';

export const errorMessages = (e: CombinedGraphQLErrors): Record<string, string> | null => {
    const errors = e.errors ?? [];

    const messages = errors.reduce((acc: any, value: any, index: number) => {
        acc[index] = value.message;
        return acc;
    }, {});

    return Object.keys(messages).length ? messages : null;
};
