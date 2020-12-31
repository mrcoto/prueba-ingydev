import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from './product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {PricePipeModule} from '../../pipes/price/price.pipe.module';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    PricePipeModule,
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
