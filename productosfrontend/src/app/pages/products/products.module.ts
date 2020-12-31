import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from '../../services/product/product.service';



@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
  ],
  providers: [ProductService]
})
export class ProductsModule { }
