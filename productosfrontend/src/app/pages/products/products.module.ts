import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products.routing.module';
import {ServiceModule} from '../../services/service.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProductCardModule} from '../../components/product-card/product-card.module';
import {RouterModule} from '@angular/router';
import {ProductFilterModule} from '../../components/product-filter/product-filter.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ServiceModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressBarModule,
    ProductCardModule,
    RouterModule,
    ProductFilterModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
  ],
  providers: []
})
export class ProductsModule { }
