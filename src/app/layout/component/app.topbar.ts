import { Component, inject, computed, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '@/app/services/auth.service';
import { MenuModule } from 'primeng/menu';
import { Menu } from 'primeng/menu';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, MenuModule],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span>CRYME</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        toggleClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    @if (user | async; as currentUser) {
                        <button type="button" class="layout-topbar-action" (click)="menu.toggle($event)">
                            <i class="pi pi-user"></i>
                            <span>{{ currentUser?.firstName }} {{ currentUser?.lastName }}</span>
                        </button>
                        <p-menu #menu [model]="userMenuItems()" [popup]="true"></p-menu>
                    } @else {
                        <button type="button" class="layout-topbar-action" routerLink="/auth/sign-in">
                            <i class="pi pi-sign-in"></i>
                            <span>Sign In</span>
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    authService = inject(AuthService);
    user = this.authService.user$;
    layoutService = inject(LayoutService);

    currentUser = toSignal(this.user);
    isDarkTheme = this.layoutService.isDarkTheme;
    menu = viewChild<Menu>('menu');

    userMenuItems = computed(() => {
        const currentUser = this.currentUser();
        const darkTheme = this.isDarkTheme();
        if (currentUser) {
            return [
                {
                    label: `${currentUser.firstName} ${currentUser.lastName}`,
                    items: [
                        {
                            label: currentUser.email || '',
                            disabled: true
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Dark Mode',
                            icon: darkTheme ? 'pi pi-sun' : 'pi pi-moon',
                            command: () => this.toggleDarkMode()
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Logout',
                            icon: 'pi pi-sign-out',
                            command: () => this.authService.logout()
                        }
                    ]
                }
            ] as MenuItem[];
        }
        return [] as MenuItem[];
    });

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    openConfigurator() {}
}
