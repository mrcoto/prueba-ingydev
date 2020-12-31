import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {BrandService} from '../../../services/brand/brand.service';
import {CategoryService} from '../../../services/category/category.service';
import {ManufacturerTypeService} from '../../../services/manufacturer-type/manufacturer-type.service';
import {ProductLineService} from '../../../services/product-line/product-line.service';
import {ProductStatusService} from '../../../services/product-status/product-status.service';
import {UenService} from '../../../services/uen/uen.service';
import {UomService} from '../../../services/uom/uom.service';
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
    private readonly brandService: BrandService,
    private readonly categoryService: CategoryService,
    private readonly manufacturerTypeService: ManufacturerTypeService,
    private readonly productLineService: ProductLineService,
    private readonly productStatusService: ProductStatusService,
    private readonly uenService: UenService,
    private readonly uomService: UomService,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.brandService.list().subscribe(response => console.log(response));
    this.categoryService.list().subscribe(response => console.log(response));
    this.manufacturerTypeService.list().subscribe(response => console.log(response));
    this.productLineService.list().subscribe(response => console.log(response));
    this.productStatusService.list().subscribe(response => console.log(response));
    this.uenService.list().subscribe(response => console.log(response));
    this.uomService.list().subscribe(response => console.log(response));
  }

  loadProducts(): void {
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

  loadMoreProducts(): void {
    this.filters.page = this.products.current_page + 1;
    this.loadProducts();
  }

  onClickedCard(product: Product): void {
    this.router.navigate(['/productos/' + product.id]);
  }

}
