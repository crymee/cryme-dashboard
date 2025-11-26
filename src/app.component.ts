import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PusherBeamsService } from '@/app/services/push-beams.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    constructor(private readonly pusherBeamsService: PusherBeamsService) {}

    async ngOnInit(): Promise<void> {
        await this.pusherBeamsService.init();

        await this.pusherBeamsService.subscribe('hello');
    }
}
