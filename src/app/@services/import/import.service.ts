import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  constructor(private httpClient: HttpClient) {}

  importEscolas(file: File): Observable<any> {
    const data = new FormData();
    data.append('file', file);
    return this.httpClient
               .post<any>(environment.API_PATH + 'import/escolas', data);
  }

}
