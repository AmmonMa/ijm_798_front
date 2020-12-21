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

  findById(id: number): Observable<Escola> {
    return this.httpClient
               .get<Escola>(environment.API_PATH + 'escolas/' + id);
  }

  save(escola: Escola): Observable<number> {
    return (!escola.id) ?
      this.httpClient.post<number>(environment.API_PATH + 'escolas', escola) :
      this.httpClient.put<number>(environment.API_PATH + 'escolas/' + escola.id, escola);
  }


  remove(id: number): Observable<boolean> {
    return this.httpClient
               .delete<boolean>(environment.API_PATH + 'escolas/' + id );
  }

}
