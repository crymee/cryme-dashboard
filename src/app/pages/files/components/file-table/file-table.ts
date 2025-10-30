import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Product, ProductService } from '@/pages/service/product.service';
import { UsersGQL } from '@/generated/graphql';
import { tap } from 'rxjs';

@Component({
    selector: 'app-file-table',
    imports: [CommonModule, TableModule, ButtonModule, RippleModule],
    providers: [ProductService],
    templateUrl: './file-table.html',
    styleUrl: './file-table.scss'
})
export class FileTable {
    products!: Product[];

    constructor(
        private productService: ProductService,
        private readonly usersGQL: UsersGQL
    ) {}

    ngOnInit() {
        this.usersGQL.fetch().pipe(tap(console.log)).subscribe();

        this.productService.getProductsSmall().then((data) => (this.products = data));
    }
}
