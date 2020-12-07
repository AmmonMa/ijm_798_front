import { Escola } from './escola.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  findAll(): Observable<Escola[]> {
    return this.httpClient
               .get<Escola[]>(environment.API_PATH + 'escolas');
  }

  create(formData): Observable<number> {



    return this.httpClient
               .post<number>(environment.API_PATH + 'escolas', formData);
  }

}
