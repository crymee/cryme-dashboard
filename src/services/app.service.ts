import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAppStateMemoized } from '../store/app/app.selectors';
import { RootState } from '../store/app/app.reducers';

@Injectable({ providedIn: 'root' })
export class AppService {
    get state$() {
        return this.store.select(selectAppStateMemoized);
    }

    constructor(private readonly store: Store<RootState>) {}
}
