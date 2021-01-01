import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxFilterComponent} from './checkbox-filter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [CheckboxFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
  exports: [CheckboxFilterComponent]
})
export class CheckboxFilterModule { }
