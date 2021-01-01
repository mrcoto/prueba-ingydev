import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IProductFilters} from '../../services/product/product-filters';
import {BrandService} from '../../services/brand/brand.service';
import {CategoryService} from '../../services/category/category.service';
import {ManufacturerTypeService} from '../../services/manufacturer-type/manufacturer-type.service';
import {ProductLineService} from '../../services/product-line/product-line.service';
import {ProductStatusService} from '../../services/product-status/product-status.service';
import {UenService} from '../../services/uen/uen.service';
import {UomService} from '../../services/uom/uom.service';
import {Brand} from '../../models/brand';
import {Category} from '../../models/category';
import {ProductLine} from '../../models/product-line';
import {Uen} from '../../models/uen';
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

  search: string;
  brands: Brand[] = [];
  categories: Category[] = [];
  lines: ProductLine[] = [];
  uens: Uen[] = [];

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
    this.brandService.list().subscribe(response => this.brands = response);
    this.categoryService.list().subscribe(response => this.categories = response);
    this.productLineService.list().subscribe(response => this.lines = response);
    this.uenService.list().subscribe(response => this.uens = response);
  }

  changedCheckbox(key: string, values: Selected<any>[]): void {
    console.log(key);
    console.log(values);
    const idList = values.filter(value => value.completed).map(value => value.data.id);
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
