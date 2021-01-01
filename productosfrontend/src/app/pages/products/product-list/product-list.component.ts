import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {Pagination} from '../../../models/pagination';
import {Product} from '../../../models/product';
import {IProductFilters} from '../../../services/product/product-filters';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  loading = false;
  pageSize = 20;
  products: Pagination<Product> = {
    total: 1,
    found: 0,
    current_page: 0,
    total_pages: 0,
    data: []
  };
  filters: IProductFilters = {};

  constructor(
    private readonly router: Router,
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.reloadProducts();
  }

  reloadProducts(): void {
    this.filters.size = this.pageSize;
    this.filters.page = 0;
    this.loading = true;
    this.productService.paginate(this.filters)
      .subscribe(
        response => this.products = response,
        err => console.log(err))
      .add(() => this.loading = false);
  }

  loadMoreProducts(): void {
    this.filters.page = this.products.current_page + 1;
    this.filters.size = this.pageSize;
    this.loading = true;
    this.productService.paginate(this.filters)
      .subscribe(
        response =>
        {
          this.products.current_page = response.current_page;
          this.products.total_pages = response.total_pages;
          this.products.total = response.total;
          this.products.found += response.found;
          response.data.forEach(product => this.products.data.push(product));
        },
        err => console.log(err))
      .add(() => this.loading = false);
  }

  onClickedCard(product: Product): void {
    this.router.navigate(['/productos/' + product.id]);
  }

  onChangedFilter(filters: IProductFilters): void {
    this.filters = filters;
    this.reloadProducts();
  }

}
