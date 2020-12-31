import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Uen} from '../../models/uen';

@Injectable({
  providedIn: 'root'
})
export class UenService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  list(): Observable<Uen[]> {
    return this.http.get<Uen[]>(`${this.api}/uens`);
  }

  find(id: number): Observable<Uen> {
    return this.http.get<Uen>(`${this.api}/uens/${id}`);
  }
}


