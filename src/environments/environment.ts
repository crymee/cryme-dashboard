export const environment = {
    production: false,
    // long live container,
    // apiUrl: 'http://localhost:8787',
    // schemaUrl: 'http://localhost:8787/graphql'

    // worker
    apiUrl: 'http://localhost:7979',
    schemaUrl: 'http://localhost:7979/graphql',
    r2PublicUrl: 'https://pub-82f31a38c5584c9f9e8dc7a5c90e568a.r2.dev'

    // apiUrl: 'https://graphql-prod.nguyenbinh23011998.workers.dev/app',
    // schemaUrl: 'https://graphql-prod.nguyenbinh23011998.workers.dev/app/graphql'
} as const;
