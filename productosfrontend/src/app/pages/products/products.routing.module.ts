import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsComponent} from './products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'catalogo',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: 'catalogo',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
