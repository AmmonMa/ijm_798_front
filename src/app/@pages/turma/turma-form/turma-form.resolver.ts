import { Turma } from './../../../@services/turma/turma.model';
import { TurmaService } from './../../../@services/turma/turma.service';
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
export class TurmaFormResolver implements Resolve<Observable<Turma>> {
  constructor(
    private turmaService: TurmaService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Turma> {
    const turmaId = route.params.turmaId;
    return this.turmaService.findById(turmaId).pipe(
      catchError((err) => {
        this.router.navigate(['/turmas']);
        return of(null);
      })
    );
  }
}
