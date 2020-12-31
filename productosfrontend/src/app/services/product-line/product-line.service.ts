import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductLine} from '../../models/product-line';

@Injectable({
  providedIn: 'root'
})
export class ProductLineService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<ProductLine[]> {
    return this.http.get<ProductLine[]>(`${this.api}/product_lines`);
  }

  find(id: number): Observable<ProductLine> {
    return this.http.get<ProductLine>(`${this.api}/product_lines/${id}`);
  }
}


