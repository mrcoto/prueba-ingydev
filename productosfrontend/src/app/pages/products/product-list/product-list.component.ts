import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {BrandService} from '../../../services/brand/brand.service';
import {CategoryService} from '../../../services/category/category.service';
import {ManufacturerTypeService} from '../../../services/manufacturer-type/manufacturer-type.service';
import {ProductLineService} from '../../../services/product-line/product-line.service';
import {ProductStatusService} from '../../../services/product-status/product-status.service';
import {UenService} from '../../../services/uen/uen.service';
import {UomService} from '../../../services/uom/uom.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
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
    this.productService.paginate().subscribe(response => console.log(response));
    this.brandService.list().subscribe(response => console.log(response));
    this.categoryService.list().subscribe(response => console.log(response));
    this.manufacturerTypeService.list().subscribe(response => console.log(response));
    this.productLineService.list().subscribe(response => console.log(response));
    this.productStatusService.list().subscribe(response => console.log(response));
    this.uenService.list().subscribe(response => console.log(response));
    this.uomService.list().subscribe(response => console.log(response));
  }

}
