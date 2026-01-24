import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { ACTIVE_SESSIONS_QUERY, REVOKE_SESSION_MUTATION, ME_QUERY } from '@/app/graphql/common.graphql';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-session-management',
    standalone: true,
    imports: [CommonModule, ButtonModule, TagModule],
    template: `
        <div class="mt-8">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0 mb-4">Active Sessions</h3>
            <p class="text-sm text-surface-600 dark:text-surface-400 mb-6">
                Manage all devices currently logged into your account.
            </p>

            <div class="flex flex-col gap-4">
                <div *ngFor="let session of sessions" 
                     class="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50 flex items-center justify-between group glass-panel">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-700 flex items-center justify-center text-surface-500">
                            <i [class]="getDeviceIcon(session.userAgent)" class="text-xl"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="font-medium text-surface-900 dark:text-surface-0">{{ getDeviceName(session.userAgent) }}</span>
                                <p-tag *ngIf="isCurrentSession(session.id)" value="Current" severity="success" class="text-[10px]"></p-tag>
                            </div>
                            <div class="text-xs text-surface-600 dark:text-surface-400 flex flex-col gap-0.5 mt-1">
                                <span>{{ session.ipAddress }} • {{ session.location }}</span>
                                <span>Last seen: {{ session.lastActive | date:'medium' }}</span>
                            </div>
                        </div>
                    </div>

                    <button pButton pRipple icon="pi pi-sign-out" 
                            label="Revoke" 
                            class="p-button-text p-button-danger p-button-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            [disabled]="isCurrentSession(session.id) || revokingId === session.id"
                            (click)="revokeSession(session.id)">
                    </button>
                </div>

                <div *ngIf="loading" class="flex flex-col gap-4">
                    <div *ngFor="let i of [1,2,3]" class="h-20 bg-surface-100 dark:bg-surface-800 animate-pulse rounded-xl"></div>
                </div>

                <div *ngIf="!loading && sessions.length === 0" class="text-center p-12 glass-panel border border-dashed border-surface-300 dark:border-surface-600 rounded-2xl">
                    <div class="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mx-auto mb-4 text-surface-400">
                        <i class="pi pi-desktop text-3xl"></i>
                    </div>
                    <p class="text-surface-600 dark:text-surface-400 font-medium">No other active sessions found.</p>
                    <p class="text-xs text-surface-500 mt-1">Your current session is the only one active.</p>
                </div>
            </div>
        </div>
    `
})
export class SessionManagementComponent implements OnInit {
    sessions: any[] = [];
    loading = true;
    revokingId: string | null = null;
    currentSessionId: string | null = null;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.loadMe();
        this.loadSessions();
    }

    loadMe() {
        this.apollo.query<any>({
            query: ME_QUERY
        }).subscribe({
            next: (result) => {
                this.currentSessionId = result.data.me.currentSessionId;
            }
        });
    }

    loadSessions() {
        this.loading = true;
        this.apollo.query<any>({
            query: ACTIVE_SESSIONS_QUERY,
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (result) => {
                this.sessions = result.data.activeSessions;
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load sessions', err);
                this.loading = false;
            }
        });
    }

    revokeSession(id: string) {
        if (confirm('Are you sure you want to revoke this session?')) {
            this.revokingId = id;
            this.apollo.mutate({
                mutation: REVOKE_SESSION_MUTATION,
                variables: { id }
            }).pipe(
                finalize(() => this.revokingId = null)
            ).subscribe({
                next: () => {
                    this.sessions = this.sessions.filter(s => s.id !== id);
                },
                error: (err) => console.error('Failed to revoke session', err)
            });
        }
    }

    isCurrentSession(id: string): boolean {
        return id === this.currentSessionId;
    }

    getDeviceIcon(userAgent: string): string {
        if (!userAgent) return 'pi pi-desktop';
        if (userAgent.includes('iPhone') || userAgent.includes('Android')) return 'pi pi-mobile';
        if (userAgent.includes('iPad') || userAgent.includes('Tablet')) return 'pi pi-tablet';
        return 'pi pi-desktop';
    }

    getDeviceName(userAgent: string): string {
        if (!userAgent) return 'Unknown Device';
        if (userAgent.includes('Chrome')) return 'Google Chrome';
        if (userAgent.includes('Firefox')) return 'Mozilla Firefox';
        if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Apple Safari';
        if (userAgent.includes('Edge')) return 'Microsoft Edge';

        const os = userAgent.includes('Windows') ? 'Windows' :
            userAgent.includes('Mac OS') ? 'macOS' :
                userAgent.includes('Linux') ? 'Linux' : '';

        return os ? `${os} Browser` : 'Web Browser';
    }
}
