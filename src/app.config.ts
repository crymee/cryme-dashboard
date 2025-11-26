import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, inject } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { provideStore } from '@ngrx/store';
import { appReducers, metaReducers } from './store/app/app.reducers';
import { appRoutes } from './app.routes';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, CombinedGraphQLErrors, CombinedProtocolErrors, InMemoryCache } from '@apollo/client/core';
import { environment } from './environments/environment';
import { ErrorLink } from '@apollo/client/link/error';
import { LoggerService } from '@/services/logger.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideApollo(() => {
            const loggerService = inject(LoggerService);
            const httpLink = inject(HttpLink);
            const basicHttpLink = httpLink.create({
                uri: environment.schemaUrl,
                withCredentials: true
            });

            const errorLink = new ErrorLink(({ error, operation }) => {
                if (CombinedGraphQLErrors.is(error)) {
                    error.errors.forEach(({ message, locations, path }) => loggerService.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
                } else if (CombinedProtocolErrors.is(error)) {
                    error.errors.forEach(({ message, extensions }) => loggerService.error(`[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`));
                } else {
                    loggerService.error(`[Network error]: ${error}`);
                }
            });

            const link = ApolloLink.from([errorLink, basicHttpLink]);

            return {
                link: link,
                cache: new InMemoryCache()
            };
        }),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        provideStore({ app: appReducers }, { metaReducers: metaReducers })
    ]
};
