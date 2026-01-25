import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Apollo } from 'apollo-angular';
import { FILES_QUERY, FILES_COUNT_QUERY, FILE_PRESIGNED_URL_QUERY, DELETE_FILE_MUTATION } from '@/app/graphql/common.graphql';
import { FileUploadComponent } from '@/app/components/file-upload/file-upload.component';
import { TableLazyLoadEvent } from 'primeng/table';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@/environments/environment';
// @ts-ignore
import * as Plyr from 'plyr';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'app-file-table',
    standalone: true,
    imports: [CommonModule, TableModule, ButtonModule, RippleModule, SkeletonModule, TagModule, FileUploadComponent, InputTextModule, IconFieldModule, InputIconModule, DialogModule, ConfirmDialogModule, ToastModule, ImageModule],
    providers: [ConfirmationService, MessageService],
    templateUrl: './file-table.html',
    styleUrl: './file-table.scss'
})
export class FileTable implements OnInit, OnDestroy {
    files: any[] = [];
    loading: boolean = true;
    totalRecords: number = 0;
    skeletonRows = Array(5);
    cols: any[] = [];
    limit: number = 10;
    offset: number = 0;
    search: string = '';
    sortBy: string = 'createdAt';
    sortOrder: string = 'desc';
    previewVisible: boolean = false;
    selectedFile: any = null;
    player: Plyr | null = null;
    @ViewChild('videoPlayer') videoPlayer!: ElementRef;

    private searchSubject = new Subject<string>();

    constructor(
        private apollo: Apollo,
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {
        this.searchSubject.pipe(
            debounceTime(500),
            distinctUntilChanged()
        ).subscribe(searchValue => {
            this.search = searchValue;
            this.offset = 0; // Reset to first page
            this.updateUrlParams();
            this.loadFiles();
        });
    }

    ngOnInit() {
        // Read query params on init
        this.route.queryParams.subscribe(params => {
            const page = parseInt(params['page'], 10) || 1;
            this.offset = (page - 1) * this.limit;
            this.search = params['search'] || '';
            this.sortBy = params['sortBy'] || 'createdAt';
            this.sortOrder = params['sortOrder'] || 'desc';
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        this.destroyPlayer();
    }

    onLazyLoad(event: TableLazyLoadEvent) {
        this.limit = event.rows || 10;
        this.offset = event.first || 0;

        if (event.sortField) {
            this.sortBy = event.sortField as string;
            this.sortOrder = event.sortOrder === 1 ? 'asc' : 'desc';
        }

        this.updateUrlParams();
        this.loadFiles();
    }

    onSearch(value: string) {
        this.searchSubject.next(value);
    }

    private updateUrlParams() {
        const page = Math.floor(this.offset / this.limit) + 1;
        const queryParams: any = {};

        if (page > 1) {
            queryParams.page = page;
        }
        if (this.search) {
            queryParams.search = this.search;
        }
        if (this.sortBy && this.sortBy !== 'createdAt') {
            queryParams.sortBy = this.sortBy;
        }
        if (this.sortOrder && this.sortOrder !== 'desc') {
            queryParams.sortOrder = this.sortOrder;
        }

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            queryParamsHandling: '',
            replaceUrl: true
        });
    }

    loadFiles() {
        this.loading = true;

        // Fetch Count
        this.apollo.query<any>({
            query: FILES_COUNT_QUERY,
            variables: { search: this.search },
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (res) => {
                this.totalRecords = Number(res.data.filesCount || 0);
                this.cdr.detectChanges();
            }
        });

        // Fetch Data
        this.apollo.query<any>({
            query: FILES_QUERY,
            variables: {
                limit: this.limit,
                offset: this.offset,
                search: this.search,
                sortBy: this.sortBy,
                sortOrder: this.sortOrder
            },
            fetchPolicy: 'network-only'
        }).subscribe({
            next: (result) => {
                this.files = result.data.files;
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Failed to load files', err);
                this.loading = false;
                this.cdr.detectChanges();
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

    // Preview methods
    presignedUrl: string | null = null;
    loadingPreview: boolean = false;

    openPreview(file: any) {
        this.selectedFile = file;
        this.presignedUrl = null;
        this.loadingPreview = true;
        this.previewVisible = true;
        this.destroyPlayer(); // Cleanup previous player
        this.resetZoom(); // Reset zoom state

        // Fetch presigned URL for R2 files
        if (file.storageType === 'R2' && file.id) {
            this.apollo.query<any>({
                query: FILE_PRESIGNED_URL_QUERY,
                variables: { id: file.id },
                fetchPolicy: 'network-only'
            }).subscribe({
                next: (res) => {
                    this.presignedUrl = res.data.filePresignedUrl;
                    this.loadingPreview = false;
                    this.cdr.detectChanges();

                    if (this.isVideo(file.mimetype)) {
                        setTimeout(() => this.initPlayer(), 100);
                    }
                },
                error: (err) => {
                    console.error('Failed to get presigned URL', err);
                    this.loadingPreview = false;
                    this.cdr.detectChanges();
                }
            });
        } else {
            this.presignedUrl = this.getFileUrl(file);
            this.loadingPreview = false;
            this.cdr.detectChanges(); // Ensure view updates
            if (this.isVideo(file.mimetype)) {
                setTimeout(() => this.initPlayer(), 100);
            }
        }
    }

    initPlayer() {
        if (this.videoPlayer && this.videoPlayer.nativeElement) {
            try {
                const PlyrClass = (Plyr as any).default || Plyr;
                const options: any = {
                    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                };

                // Add preview thumbnails only if VTT key exists
                if (this.selectedFile.videoMetadata?.vttKey) {
                    options.previewThumbnails = {
                        enabled: true,
                        src: `${environment.r2PublicUrl}/${this.selectedFile.videoMetadata.vttKey}`
                    };
                }

                // Construct Poster/Thumbnail URL from R2 Public URL if metadata exists
                if (this.selectedFile.videoMetadata?.thumbnailKey) {
                    const posterUrl = `${environment.r2PublicUrl}/${this.selectedFile.videoMetadata.thumbnailKey}`;
                    options.iconUrl = posterUrl;
                    options.poster = posterUrl;
                } else {
                    console.log('No video metadata found for file:', this.selectedFile.filename);
                }

                this.player = new PlyrClass(this.videoPlayer.nativeElement, options);
            } catch (e) {
                console.error('Plyr initialization failed:', e);
            }
        }
    }

    destroyPlayer() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }

    // Expose Math for template
    protected Math = Math;

    // Image Zoom State
    zoomScale = 1;
    zoomTranslateX = 0;
    zoomTranslateY = 0;
    isPanning = false;
    startX = 0;
    startY = 0;

    resetZoom() {
        this.zoomScale = 1;
        this.zoomTranslateX = 0;
        this.zoomTranslateY = 0;
    }

    zoomIn() {
        this.zoomScale = Math.min(this.zoomScale + 0.5, 5);
    }

    zoomOut() {
        this.zoomScale = Math.max(this.zoomScale - 0.5, 1);
        if (this.zoomScale === 1) {
            this.zoomTranslateX = 0;
            this.zoomTranslateY = 0;
        }
    }

    onWheel(event: WheelEvent) {
        event.preventDefault();
        const scaleAmount = 0.1;
        if (event.deltaY < 0) {
            this.zoomScale = Math.min(this.zoomScale + scaleAmount, 5);
        } else {
            this.zoomScale = Math.max(this.zoomScale - scaleAmount, 1);
            if (this.zoomScale === 1) {
                this.zoomTranslateX = 0;
                this.zoomTranslateY = 0;
            }
        }
    }

    startPan(event: MouseEvent) {
        if (this.zoomScale > 1) {
            this.isPanning = true;
            this.startX = event.clientX - this.zoomTranslateX;
            this.startY = event.clientY - this.zoomTranslateY;
            event.preventDefault(); // Prevent text selection
        }
    }

    pan(event: MouseEvent) {
        if (!this.isPanning) return;
        event.preventDefault();
        this.zoomTranslateX = event.clientX - this.startX;
        this.zoomTranslateY = event.clientY - this.startY;
    }

    endPan() {
        this.isPanning = false;
    }

    isImage(mimetype: string): boolean {
        return mimetype?.startsWith('image/') || false;
    }

    isFullscreen = false;

    toggleFullscreen(element: HTMLElement) {
        if (!document.fullscreenElement) {
            element.requestFullscreen().then(() => {
                this.isFullscreen = true;
            }).catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen().then(() => {
                this.isFullscreen = false;
            });
        }
    }

    @HostListener('document:fullscreenchange', ['$event'])
    @HostListener('document:webkitfullscreenchange', ['$event'])
    @HostListener('document:mozfullscreenchange', ['$event'])
    @HostListener('document:MSFullscreenChange', ['$event'])
    onFullscreenChange() {
        this.isFullscreen = !!document.fullscreenElement;
    }

    isVideo(mimetype: string): boolean {
        return mimetype?.startsWith('video/') || false;
    }

    getFileUrl(file: any): string {
        // Construct the file URL based on storage type
        if (file.storageType === 'GDRIVE' && file.storageKey) {
            // Google Drive direct view URL
            return `https://drive.google.com/uc?export=view&id=${file.storageKey}`;
        }
        // Fallback for other storage types or direct URLs
        return file.url || '';
    }

    downloadFile(file: any) {
        // Use presigned URL if available (for R2 files), otherwise construct URL
        const url = this.presignedUrl || this.getFileUrl(file);
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.download = file.filename;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    deleteFile(file: any) {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete "${file.filename}"? This action cannot be undone.`,
            header: 'Delete File',
            icon: 'pi pi-exclamation-triangle',
            acceptButtonStyleClass: 'p-button-danger',
            accept: () => {
                this.loading = true; // Show loading indicator
                this.apollo.mutate<any>({
                    mutation: DELETE_FILE_MUTATION,
                    variables: { id: file.id }
                }).subscribe({
                    next: (result) => {
                        if (result.data?.deleteFile) {
                            this.messageService.add({
                                severity: 'success',
                                summary: 'File Deleted',
                                detail: `"${file.filename}" has been deleted successfully.`
                            });
                            this.previewVisible = false;
                            this.loadFiles(); // Refresh the list
                        }
                    },
                    error: (err) => {
                        console.error('Failed to delete file', err);
                        this.loading = false; // Stop loading on error
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Delete Failed',
                            detail: err.message || 'Failed to delete the file. Please try again.'
                        });
                    }
                });
            }
        });
    }
}
