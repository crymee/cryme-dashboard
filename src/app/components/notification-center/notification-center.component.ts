import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { NOTIFICATIONS_QUERY, MARK_NOTIFICATION_AS_READ_MUTATION, MARK_ALL_NOTIFICATIONS_AS_READ_MUTATION } from '@/app/graphql/common.graphql';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DrawerModule } from 'primeng/drawer';

@Component({
    selector: 'app-notification-center',
    standalone: true,
    imports: [CommonModule, ButtonModule, BadgeModule, DrawerModule],
    template: `
        <button pButton pRipple icon="pi pi-bell" 
                class="p-button-text p-button-rounded relative"
                (click)="visible = true">
            <p-badge *ngIf="unreadCount > 0" [value]="unreadCount.toString()" severity="danger" class="absolute -top-1 -right-1"></p-badge>
        </button>

        <p-drawer [(visible)]="visible" position="right" styleClass="w-full md:w-80 glass-sidebar">
            <div class="flex flex-col h-full">
                <div class="p-6 border-b border-surface-200 dark:border-surface-700 flex items-center justify-between bg-surface-0/50 dark:bg-surface-900/50">
                    <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0">Notifications</h3>
                    <button *ngIf="unreadCount > 0" pButton pRipple label="Clear all" 
                            class="p-button-text p-button-sm p-0" (click)="markAllAsRead()"></button>
                </div>

                <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                    <div *ngFor="let notification of notifications" 
                         class="p-4 rounded-2xl border transition-all cursor-pointer relative group"
                         [class.bg-surface-0/80]="!notification.isRead"
                         [class.dark:bg-surface-800/80]="!notification.isRead"
                         [class.border-primary-500/30]="!notification.isRead"
                         [class.border-surface-200]="notification.isRead"
                         [class.dark:border-surface-700]="notification.isRead"
                         (click)="markAsRead(notification)">
                        
                        <div class="flex gap-3">
                            <div [class]="getIconBg(notification.type)" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                                <i [class]="getIcon(notification.type)" class="text-lg"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between gap-2">
                                    <span class="font-bold text-sm text-surface-900 dark:text-surface-0 truncate">{{ notification.title }}</span>
                                    <span class="text-[10px] text-surface-500 whitespace-nowrap">{{ notification.createdAt | date:'shortTime' }}</span>
                                </div>
                                <p class="text-xs text-surface-600 dark:text-surface-400 mt-1 leading-relaxed">
                                    {{ notification.message }}
                                </p>
                            </div>
                        </div>

                        <div *ngIf="!notification.isRead" class="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-500"></div>
                    </div>

                    <div *ngIf="loading" class="flex flex-col gap-3">
                        <div *ngFor="let i of [1,2,3,4]" class="h-24 bg-surface-100 dark:bg-surface-800 animate-pulse rounded-2xl"></div>
                    </div>

                    <div *ngIf="!loading && notifications.length === 0" class="flex flex-col items-center justify-center py-12 text-surface-500">
                        <i class="pi pi-bell-slash text-4xl mb-3 opacity-20"></i>
                        <p>All caught up!</p>
                    </div>
                </div>
            </div>
        </p-drawer>
    `
})
export class NotificationCenterComponent implements OnInit {
    notifications: any[] = [];
    loading = true;
    visible = false;
    unreadCount = 0;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.loadNotifications();
        // Periodically poll for new notifications (simplified real-time)
        setInterval(() => this.loadNotifications(), 30000);
    }

    loadNotifications() {
        this.apollo.query<any>({
            query: NOTIFICATIONS_QUERY,
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (result) => {
                this.notifications = result.data.notifications;
                this.unreadCount = this.notifications.filter(n => !n.isRead).length;
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load notifications', err);
                this.loading = false;
            }
        });
    }

    markAsRead(notification: any) {
        if (notification.isRead) return;

        this.apollo.mutate({
            mutation: MARK_NOTIFICATION_AS_READ_MUTATION,
            variables: { id: notification.id }
        }).subscribe({
            next: () => {
                notification.isRead = true;
                this.unreadCount = Math.max(0, this.unreadCount - 1);
            }
        });
    }

    markAllAsRead() {
        this.apollo.mutate({
            mutation: MARK_ALL_NOTIFICATIONS_AS_READ_MUTATION
        }).subscribe({
            next: () => {
                this.notifications.forEach(n => n.isRead = true);
                this.unreadCount = 0;
            }
        });
    }

    getIcon(type: string): string {
        switch (type) {
            case 'success': return 'pi pi-check-circle';
            case 'warning': return 'pi pi-exclamation-triangle';
            case 'error': return 'pi pi-times-circle';
            default: return 'pi pi-info-circle';
        }
    }

    getIconBg(type: string): string {
        switch (type) {
            case 'success': return 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400';
            case 'warning': return 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400';
            case 'error': return 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400';
            default: return 'bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400';
        }
    }
}
