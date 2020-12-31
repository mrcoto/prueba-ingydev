import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/categories`);
  }

  find(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.api}/categories/${id}`);
  }
}

