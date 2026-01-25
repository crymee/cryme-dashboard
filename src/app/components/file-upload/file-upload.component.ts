import { Component, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpEventType } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { environment } from '@/environments/environment';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [CommonModule, HttpClientModule, ButtonModule, RippleModule, ProgressBarModule],
    template: `
        <div class="glass-panel p-8 border-2 border-dashed border-surface-300 dark:border-surface-600 rounded-2xl transition-all"
             [class.border-primary-500]="isDragging"
             (dragover)="onDragOver($event)"
             (dragleave)="onDragLeave($event)"
             (drop)="onDrop($event)">
            
            <div class="flex flex-col items-center justify-center text-center">
                <div class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 animate-bounce">
                    <i class="pi pi-cloud-upload text-3xl"></i>
                </div>
                <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-0">Drag & Drop files here</h4>
                <p class="text-sm text-surface-600 dark:text-surface-400 mt-1 mb-6">or click the button below to browse</p>
                
                <input type="file" #fileInput (change)="onFileSelect($event)" multiple class="hidden" />
                <button pButton pRipple label="Browse Files" icon="pi pi-plus" (click)="fileInput.click()" class="p-button-primary"></button>
            </div>

            <!-- Uploading Progress -->
            <div *ngIf="uploadingFiles.length > 0" class="mt-8 flex flex-col gap-4">
                <div *ngFor="let file of uploadingFiles" class="p-4 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-surface-900 dark:text-surface-0 truncate max-w-xs">{{ file.name }}</span>
                        <div class="flex items-center gap-2">
                            <span *ngIf="file.progress < 95" class="text-xs text-surface-500">{{ file.progress }}%</span>
                            <span *ngIf="file.progress >= 95" class="text-xs text-primary-500 font-medium animate-pulse">Processing...</span>
                        </div>
                    </div>
                    <p-progressBar [value]="file.progress" [showValue]="false" styleClass="h-1.5"
                        [class.processing-bar]="file.progress >= 95"></p-progressBar>
                </div>
            </div>
        </div>
    `
})
export class FileUploadComponent {
    @Output() onUploadComplete = new EventEmitter<any>();
    isDragging = false;
    uploadingFiles: { name: string, progress: number }[] = [];

    constructor(
        private http: HttpClient,
        private cdr: ChangeDetectorRef
    ) { }

    onDragOver(event: DragEvent) {
        event.preventDefault();
        this.isDragging = true;
    }

    onDragLeave(event: DragEvent) {
        this.isDragging = false;
    }

    onDrop(event: DragEvent) {
        event.preventDefault();
        this.isDragging = false;
        const files = event.dataTransfer?.files;
        if (files) {
            this.handleFiles(files);
        }
    }

    onFileSelect(event: any) {
        const files = event.target.files;
        if (files) {
            this.handleFiles(files);
        }
    }

    private handleFiles(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            this.uploadFile(files[i]);
        }
    }

    private uploadFile(file: File) {
        const fileInfo = { name: file.name, progress: 0 };
        this.uploadingFiles.push(fileInfo);
        this.cdr.detectChanges(); // Trigger detect changes after push

        const formData = new FormData();
        formData.append('file', file);

        this.http.post(`${environment.apiUrl}/upload`, formData, {
            reportProgress: true,
            observe: 'events',
            withCredentials: true
        }).subscribe({
            next: (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                    if (event.total) {
                        const percent = Math.round(100 * event.loaded / event.total);
                        // Cap at 95% until server responds to better reflect "processing" time
                        fileInfo.progress = Math.min(percent, 95);
                        this.cdr.detectChanges(); // Trigger detect changes on progress update
                    }
                } else if (event.type === HttpEventType.Response) {
                    fileInfo.progress = 100;
                    this.cdr.detectChanges();

                    // Small delay to let user see 100% before removing
                    setTimeout(() => {
                        this.uploadingFiles = this.uploadingFiles.filter(f => f !== fileInfo);
                        this.onUploadComplete.emit(event.body);
                        this.cdr.detectChanges();
                    }, 500);
                }
            },
            error: (error) => {
                console.error('Upload failed', error);
                this.uploadingFiles = this.uploadingFiles.filter(f => f !== fileInfo);
                this.cdr.detectChanges(); // Trigger detect changes on error
            }
        });
    }
}
