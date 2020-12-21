import { Escola } from './../../../@services/escola/escola.model';
import { EscolaService } from './../../../@services/escola/escola.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class EscolaFormResolver implements Resolve<Observable<Escola>> {
  constructor(private escolaService: EscolaService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Escola> {
    const id = route.params.id;
    return this.escolaService.findById(id).pipe(
      catchError((err) => {
        console.log(err);
        this.router.navigate(['/escolas']);
        return of(null);
      })
    );
  }
}
