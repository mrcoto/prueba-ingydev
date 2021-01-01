import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipAutocompleteFilterComponent} from './chip-autocomplete-filter.component';



@NgModule({
  declarations: [ChipAutocompleteFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [ChipAutocompleteFilterComponent]
})
export class ChipAutocompleteFilterModule { }
