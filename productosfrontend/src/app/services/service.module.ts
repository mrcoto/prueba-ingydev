import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrandService} from './brand/brand.service';
import {CategoryService} from './category/category.service';
import {ManufacturerTypeService} from './manufacturer-type/manufacturer-type.service';
import {ProductService} from './product/product.service';
import {ProductLineService} from './product-line/product-line.service';
import {ProductStatusService} from './product-status/product-status.service';
import {UenService} from './uen/uen.service';
import {UomService} from './uom/uom.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    BrandService,
    CategoryService,
    ManufacturerTypeService,
    ProductService,
    ProductLineService,
    ProductStatusService,
    UenService,
    UomService
  ],
})
export class ServiceModule { }
