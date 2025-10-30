import { createSelector } from '@ngrx/store';
import { AppState, RootState } from './app.reducers';

export const selectAppSlice = (state: RootState): AppState => state.app;

export const selectAppStateMemoized = createSelector(
    selectAppSlice,
    (appState: AppState) => appState // Simply returns the state slice, but memoized
);

export const selectAppMode = createSelector(selectAppSlice, (appState: AppState) => appState.mode);
