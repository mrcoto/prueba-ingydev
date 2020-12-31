import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProductFilters} from './product-filters';
import {Observable} from 'rxjs';
import {Pagination} from '../../models/pagination';
import {Product} from '../../models/product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  paginate(filters: IProductFilters = {}): Observable<Pagination<Product>> {
    const qs = this.buildQueryString(filters);
    return this.http.get<Pagination<Product>>(`${this.api}/products?${qs}`);
  }

  find(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/products/${id}`);
  }

  private buildQueryString(filters: IProductFilters): string {
    filters.page = filters.page || 0;
    filters.size = filters.size || 10;
    return Object.keys(filters)
      .reduce((list: string[], key) => {
        const value = filters[key];
        if (value === undefined || value === null) {
          list.push(`${key}=${value}`);
        }
        return list;
      }, [])
      .join('&');
  }
}
