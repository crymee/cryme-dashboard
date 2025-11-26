export const environment = {
    production: false,
    // long live container,
    // apiUrl: 'http://localhost:8787',
    // schemaUrl: 'http://localhost:8787/graphql'

    // worker
    // apiUrl: 'http://localhost:7979',
    // schemaUrl: 'http://localhost:7979/graphql'

    apiUrl: 'https://graphql-prod.nguyenbinh23011998.workers.dev/app',
    schemaUrl: 'https://graphql-prod.nguyenbinh23011998.workers.dev/app/graphql'
} as const;
