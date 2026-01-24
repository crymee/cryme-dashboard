import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { Apollo } from 'apollo-angular';
import { FILES_QUERY } from '@/app/graphql/common.graphql';
import { FileUploadComponent } from '@/app/components/file-upload/file-upload.component';

@Component({
    selector: 'app-file-table',
    standalone: true,
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, SkeletonModule, TagModule, FileUploadComponent],
    templateUrl: './file-table.html',
    styleUrl: './file-table.scss'
})
export class FileTable {
    files: any[] = [];
    loading: boolean = true;
    skeletonRows = Array(5);

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.loadFiles();
    }

    loadFiles() {
        this.loading = true;
        this.apollo.query<any>({
            query: FILES_QUERY,
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (result) => {
                this.files = result.data.files;
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load files', err);
                this.loading = false;
            }
        });
    }

    onUploadComplete() {
        this.loadFiles();
    }

    getFileIcon(mimetype: string): string {
        if (!mimetype) return 'pi pi-file';
        if (mimetype.startsWith('image/')) return 'pi pi-image';
        if (mimetype.startsWith('video/')) return 'pi pi-video';
        if (mimetype.startsWith('application/pdf')) return 'pi pi-file-pdf';
        return 'pi pi-file';
    }
}
