import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://graphql.nguyenbinh23011998.workers.dev/graphql',
    documents: './src/**/*.ts',
    generates: {
        './graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular']
        }
    }
};
export default config;
