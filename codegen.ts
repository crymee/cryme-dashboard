import type { CodegenConfig } from '@graphql-codegen/cli';
import { environment } from './src/environments/environment';

const config: CodegenConfig = {
    schema: environment.schemaUrl,
    documents: './src/**/*.graphql.ts',
    generates: {
        './graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular']
        }
    }
};
export default config;
