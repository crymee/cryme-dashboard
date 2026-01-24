import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { WEBHOOKS_QUERY, REGISTER_WEBHOOK_MUTATION, DELETE_WEBHOOK_MUTATION } from '@/app/graphql/common.graphql';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-webhook-management',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, MultiSelectModule, ChipModule, TagModule],
    template: `
        <div class="mt-12">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0 mb-4">Webhooks</h3>
            <p class="text-sm text-surface-600 dark:text-surface-400 mb-6">
                Receive real-time notifications by registering your HTTP endpoints.
            </p>

            <!-- Registration Form -->
            <div class="glass-panel p-6 mb-8">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="flex-1">
                        <label class="block text-xs font-semibold uppercase text-surface-500 mb-2">Endpoint URL</label>
                        <input pInputText [(ngModel)]="newWebhookUrl" placeholder="https://api.yourdomain.com/webhook" class="w-full p-inputtext-sm" />
                    </div>
                    <div class="flex-1">
                        <label class="block text-xs font-semibold uppercase text-surface-500 mb-2">Events</label>
                        <p-multiSelect [options]="eventOptions" [(ngModel)]="newWebhookEvents" optionLabel="label" optionValue="value" 
                                      placeholder="Select Events" class="w-full text-sm" appendTo="body" display="chip"></p-multiSelect>
                    </div>
                </div>
                <div class="mt-4 flex justify-end">
                    <button pButton pRipple label="Add Webhook" icon="pi pi-plus" 
                            class="p-button-sm p-button-primary" 
                            [loading]="registering" [disabled]="!newWebhookUrl || newWebhookEvents.length === 0"
                            (click)="registerWebhook()"></button>
                </div>
            </div>

            <!-- Webhooks List -->
            <div class="flex flex-col gap-4">
                <div *ngFor="let webhook of webhooks" 
                     class="p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group glass-panel">
                    <div class="flex flex-col gap-2 flex-1 overflow-hidden">
                        <div class="flex items-center gap-2">
                            <span class="font-medium text-surface-900 dark:text-surface-0 truncate max-w-xs">{{ webhook.url }}</span>
                            <p-tag [value]="webhook.isActive ? 'Active' : 'Inactive'" [severity]="webhook.isActive ? 'success' : 'warn'"></p-tag>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <p-chip *ngFor="let event of webhook.events" [label]="event" class="text-[10px]"></p-chip>
                        </div>
                        <div class="text-xs text-surface-500 mt-1 font-mono">
                            Secret: {{ webhook.secret.substring(0, 8) }}...
                        </div>
                    </div>

                    <button pButton pRipple icon="pi pi-trash" 
                            label="Delete" 
                            class="p-button-text p-button-danger p-button-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            [disabled]="deletingId === webhook.id"
                            (click)="deleteWebhook(webhook.id)">
                    </button>
                </div>

                <div *ngIf="loading" class="flex flex-col gap-4">
                    <div *ngFor="let i of [1,2]" class="h-24 bg-surface-100 dark:bg-surface-800 animate-pulse rounded-xl"></div>
                </div>

                <div *ngIf="!loading && webhooks.length === 0" class="text-center p-8 text-surface-500">
                    No webhooks registered yet.
                </div>
            </div>
        </div>
    `
})
export class WebhookManagementComponent implements OnInit {
    webhooks: any[] = [];
    loading = true;
    registering = false;
    deletingId: string | null = null;

    newWebhookUrl = '';
    newWebhookEvents: string[] = [];

    eventOptions = [
        { label: 'User Created', value: 'user.created' },
        { label: 'File Uploaded', value: 'file.uploaded' },
        { label: 'Login Success', value: 'login.success' }
    ];

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.loadWebhooks();
    }

    loadWebhooks() {
        this.loading = true;
        this.apollo.query<any>({
            query: WEBHOOKS_QUERY,
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (result) => {
                this.webhooks = result.data.webhooks;
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load webhooks', err);
                this.loading = false;
            }
        });
    }

    registerWebhook() {
        this.registering = true;
        this.apollo.mutate({
            mutation: REGISTER_WEBHOOK_MUTATION,
            variables: {
                url: this.newWebhookUrl,
                events: this.newWebhookEvents
            }
        }).pipe(
            finalize(() => this.registering = false)
        ).subscribe({
            next: (result: any) => {
                this.webhooks.push(result.data.registerWebhook);
                this.newWebhookUrl = '';
                this.newWebhookEvents = [];
            },
            error: (err) => console.error('Failed to register webhook', err)
        });
    }

    deleteWebhook(id: string) {
        if (confirm('Are you sure you want to delete this webhook?')) {
            this.deletingId = id;
            this.apollo.mutate({
                mutation: DELETE_WEBHOOK_MUTATION,
                variables: { id }
            }).pipe(
                finalize(() => this.deletingId = null)
            ).subscribe({
                next: () => {
                    this.webhooks = this.webhooks.filter(w => w.id !== id);
                },
                error: (err) => console.error('Failed to delete webhook', err)
            });
        }
    }
}
