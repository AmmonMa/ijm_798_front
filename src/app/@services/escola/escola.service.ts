import { Escola } from './escola.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Escola[]> {
    return this.httpClient
               .get<Escola[]>(environment.API_PATH + 'escolas');
  }

}
