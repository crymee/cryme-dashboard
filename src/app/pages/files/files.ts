
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileTable } from './components/file-table/file-table';

@Component({
    selector: 'app-files',
    standalone: true,
    imports: [CommonModule, FileTable],
    template: `
        <div class="animate-fade-in-up">
            <app-file-table></app-file-table>
        </div>
    `
})
export class Files { }
