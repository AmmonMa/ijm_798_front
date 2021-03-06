import { Turma } from './turma.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  findAll(): Observable<Turma[]> {
    return this.httpClient
               .get<Turma[]>(environment.API_PATH + 'turmas');
  }

  findById(id: number): Observable<Turma> {
    return this.httpClient
               .get<Turma>(environment.API_PATH + 'turmas/' + id);
  }

  save(turma: Turma): Observable<number> {
    return (!turma.id) ?
      this.httpClient.post<number>(environment.API_PATH + 'turmas', turma) :
      this.httpClient.put<number>(environment.API_PATH + 'turmas/' + turma.id, turma);
  }

  remove(id: number): Observable<boolean> {
    return this.httpClient
               .delete<boolean>(environment.API_PATH + 'turmas/' + id );
  }

}
