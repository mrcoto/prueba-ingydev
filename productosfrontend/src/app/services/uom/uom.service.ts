import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Uom} from '../../models/uom';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<Uom[]> {
    return this.http.get<Uom[]>(`${this.api}/uoms`);
  }

  find(id: number): Observable<Uom> {
    return this.http.get<Uom>(`${this.api}/uoms/${id}`);
  }
}

