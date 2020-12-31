import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products.routing.module';



@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
