import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PusherBeamsService } from '@/app/services/push-beams.service';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ToastModule],
    template: `<p-toast></p-toast><router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    constructor(private readonly pusherBeamsService: PusherBeamsService) { }

    async ngOnInit(): Promise<void> {
        await this.pusherBeamsService.init();

        await this.pusherBeamsService.subscribe('hello');
    }
}
