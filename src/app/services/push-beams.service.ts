import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as PusherPushNotifications from '@pusher/push-notifications-web';
import { environment } from '@/environments/environment';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenProviderResponse } from '@pusher/push-notifications-web';

@Injectable({
    providedIn: 'root'
})
export class PusherBeamsService {
    instanceId!: string;

    private client: PusherPushNotifications.Client | null = null;

    constructor(private readonly http: HttpClient) {}

    async init() {
        const instanceId = await this.getInstanceId();

        if (!instanceId) {
            console.error('We didnt provide PUSHER_INSTANCE_ID');

            return;
        }

        this.client = new PusherPushNotifications.Client({
            instanceId
        });

        try {
            await this.client.start();

            console.log('Pusher Beams started.');
        } catch (err) {
            console.error('Pusher Beams:', err);
        }

        return this;
    }

    async subscribe(interest: string) {
        try {
            if (this.client) {
                await this.client.addDeviceInterest(interest);

                console.log(`Subscribed to interest: ${interest}`);
            }
        } catch (err) {
            console.error('Pusher Beams:', err);
        }
    }

    async unsubscribe(interest: string) {
        try {
            if (this.client) {
                await this.client.removeDeviceInterest(interest);

                console.log(`Unsubscribed to interest: ${interest}`);
            }
        } catch (err) {
            console.error('Pusher Beams:', err);
        }
    }

    async setAuthenticatedUser(userId: string) {
        if (!this.client) {
            console.error('Client chưa được khởi tạo');
            return;
        }

        const fetchToken = async (): Promise<TokenProviderResponse> => {
            const { token }: any = await firstValueFrom(this.http.get(`${environment.apiUrl}/pusher/auth`, { withCredentials: true }));

            return {
                token
            };
        };

        await this.client.setUserId(userId, {
            fetchToken
        });

        console.log(`Đã xác thực người dùng: ${userId}`);
    }

    private async getInstanceId() {
        if (!this.instanceId) this.instanceId = await firstValueFrom(this.http.get(`${environment.apiUrl}/pusher/key`, { withCredentials: true }).pipe(map((res: any) => res.instanceId)));

        return this.instanceId;
    }
}
