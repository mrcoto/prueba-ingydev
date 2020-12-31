import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Brand} from '../../models/brand';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.api}/brands`);
  }

  find(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.api}/brands/${id}`);
  }
}
