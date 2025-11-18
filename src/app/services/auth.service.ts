import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export type User = {};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _token = new BehaviorSubject<string | null>(null);
    private _user = new BehaviorSubject<User | null>(null);

    public token$ = this._token.asObservable();
    public user$ = this._user.asObservable();
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);

    private GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

    constructor(
        private router: Router,
        private ngZone: NgZone
    ) {
        // Kiểm tra xem có token trong localStorage khi tải lại trang không
        const token = localStorage.getItem('google_token');

        if (token) {
            this.setToken(token);
        }
    }

    public initializeGoogleAuth() {
        // if (typeof google === 'undefined') {
        //     console.error('Google script chưa tải xong');
        //     return;
        // }
        // google.accounts.id.initialize({
        //     client_id: this.GOOGLE_CLIENT_ID,
        //     callback: async (response: any) => {
        //         await this.ngZone.run(async () => {
        //             await this.handleCredentialResponse(response);
        //         });
        //     }
        // });
    }

    public promptLogin() {
        // if (typeof google === 'undefined') {
        //     console.error('Google script chưa tải xong');
        //     return;
        // }
        // Hiển thị popup "One Tap"
        // google.accounts.id.prompt();
    }

    private async handleCredentialResponse(response: any) {
        const token = response.credential; // Đây là cái JWT (ID Token)
        this.setToken(token);
        await this.router.navigate(['/']); // Chuyển về trang chủ
    }

    private setToken(token: string) {
        localStorage.setItem('google_token', token); // Lưu vào localStorage
        this._token.next(token);

        // const decoded: User = jwtDecode(token);
        const decoded: User = {};
        this._user.next(decoded);
        this.isAuthenticated$.next(true);
    }

    // 4. Xử lý đăng xuất
    public logout() {
        // if (typeof google === 'undefined') {
        //     console.error('Google script chưa tải xong');
        //     return;
        // }

        // Tắt chế độ tự động đăng nhập (One Tap)
        // google.accounts.id.disableAutoSelect();

        // Xóa token khỏi bộ nhớ
        localStorage.removeItem('google_token');
        this._token.next(null);
        this._user.next(null);
        this.isAuthenticated$.next(false);
        this.router.navigate(['/']);
    }

    // 5. Hàm trợ giúp để lấy token (cho Interceptor)
    public getToken(): string | null {
        return this._token.getValue();
    }
}
