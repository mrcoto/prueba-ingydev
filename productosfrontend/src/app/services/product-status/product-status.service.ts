import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductStatus} from '../../models/product-status';

@Injectable({
  providedIn: 'root'
})
export class ProductStatusService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<ProductStatus[]> {
    return this.http.get<ProductStatus[]>(`${this.api}/product_statuses`);
  }

  find(id: number): Observable<ProductStatus> {
    return this.http.get<ProductStatus>(`${this.api}/product_statuses/${id}`);
  }
}


