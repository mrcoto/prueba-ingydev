import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManufacturerType} from '../../models/manufacturer-type';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerTypeService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<ManufacturerType[]> {
    return this.http.get<ManufacturerType[]>(`${this.api}/manufacturer_types`);
  }

  find(id: number): Observable<ManufacturerType> {
    return this.http.get<ManufacturerType>(`${this.api}/manufacturer_types/${id}`);
  }
}

