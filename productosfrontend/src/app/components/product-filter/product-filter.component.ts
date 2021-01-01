import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IProductFilters} from '../../services/product/product-filters';
import {BrandService} from '../../services/brand/brand.service';
import {CategoryService} from '../../services/category/category.service';
import {ManufacturerTypeService} from '../../services/manufacturer-type/manufacturer-type.service';
import {ProductLineService} from '../../services/product-line/product-line.service';
import {ProductStatusService} from '../../services/product-status/product-status.service';
import {UenService} from '../../services/uen/uen.service';
import {UomService} from '../../services/uom/uom.service';
import {Selected} from '../shared/checkbox-filter/selected';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  filters: IProductFilters = {};

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedFilter = new EventEmitter<IProductFilters>();

  constructor(
    public brandService: BrandService,
    public categoryService: CategoryService,
    public manufacturerTypeService: ManufacturerTypeService,
    public productLineService: ProductLineService,
    public productStatusService: ProductStatusService,
    public uenService: UenService,
    public uomService: UomService,
  ) { }

  ngOnInit(): void {
  }

  changedCheckbox(key: string, values: Selected<any>[]): void {
    const idList = values.filter(value => value.completed).map(value => value.data.id);
    console.log(values);
    console.log(idList);
    if (idList.length > 0) {
      this.filters[key] = idList;
    } else {
      this.filters[key] = null;
    }
    this.filtersChanged();
  }

  filtersChanged(): void {
    this.onChangedFilter.emit(this.filters);
  }

}
