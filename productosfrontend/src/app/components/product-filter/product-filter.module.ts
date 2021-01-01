import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductFilterComponent} from './product-filter.component';
import {ServiceModule} from '../../services/service.module';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {CheckboxFilterModule} from '../shared/checkbox-filter/checkbox-filter.module';
import {CheckboxAutocompleteFilterModule} from '../shared/checkbox-autocomplete-filter/checkbox-autocomplete-filter.module';



@NgModule({
  declarations: [ProductFilterComponent],
  imports: [
    CommonModule,
    ServiceModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    CheckboxFilterModule,
    CheckboxAutocompleteFilterModule,
  ],
  exports: [ProductFilterComponent]
})
export class ProductFilterModule { }
