import { ActionReducer, createReducer, on } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { changeMode } from './app.actions';

export interface AppState {
    mode: 'dark' | 'light';
}

export interface RootState {
    app: AppState;
}

export const initialAppState: AppState = {
    mode: 'dark'
};

export const initialState: RootState = {
    app: initialAppState
};

export function localStorageSyncReducer(reducer: ActionReducer<RootState>) {
    return localStorageSync({
        keys: ['app'],
        rehydrate: true,
        storage: sessionStorage
    })(reducer);
}

export const metaReducers = [localStorageSyncReducer]; // This is now correctly typed as a synchronous ActionReducer factory

export const appReducers = createReducer(
    initialAppState,
    on(changeMode, (state, { mode }) => ({
        mode
    }))
);
