import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LOGOUT_MUTATION, ME_QUERY } from '@/app/graphql/common.graphql';
import { firstValueFrom } from 'rxjs';
import { LocalForageService } from '@/services/local-storage.service';

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface AuthData {
    user: User;
    sessionId: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user = new BehaviorSubject<User | null>(null);

    public user$ = this._user.asObservable();
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);

    private authChecked: Promise<void>;

    constructor(
        private router: Router,
        private apollo: Apollo,
        private localStorage: LocalForageService
    ) {
        this.authChecked = this.checkAuth();
    }

    private async checkAuth() {
        try {
            const storedUser = await this.localStorage.getItem<User>('user');
            if (storedUser) {
                this._user.next(storedUser);
                this.isAuthenticated$.next(true);
            }

            try {
                const result = await firstValueFrom(this.apollo.query<{ me: User }>({ query: ME_QUERY }));
                if (result.data?.me) {
                    this._user.next(result.data.me);
                    this.isAuthenticated$.next(true);
                    await this.localStorage.setItem('user', result.data.me);
                }
            } catch (apiError) {
                if (!storedUser) {
                    this._user.next(null);
                    this.isAuthenticated$.next(false);
                }
            }
        } catch (e) {
            this._user.next(null);
            this.isAuthenticated$.next(false);
        }
    }

    public setUser(user: User, sessionId?: string) {
        this._user.next(user);
        this.isAuthenticated$.next(true);
        this.localStorage.setItem('user', user);
        if (sessionId) {
            this.localStorage.setItem('sessionId', sessionId);
        }
    }

    public async logout() {
        try {
            await firstValueFrom(this.apollo.mutate({ mutation: LOGOUT_MUTATION }));
        } catch (e) {
            console.error('Logout error:', e);
        } finally {
            this._user.next(null);
            this.isAuthenticated$.next(false);
            this.apollo.client.resetStore();
            await this.localStorage.removeItem('user');
            await this.localStorage.removeItem('sessionId');
            await this.router.navigate(['/auth/sign-in']);
        }
    }

    public getUser(): User | null {
        return this._user.getValue();
    }

    public async waitForAuthCheck(): Promise<void> {
        await this.authChecked;
    }
}
