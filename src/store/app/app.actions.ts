import { createAction, props } from '@ngrx/store';
import { AppState } from './app.reducers';

export const changeMode = createAction('[App] Change Application mode', props<{ mode: AppState['mode'] }>());
