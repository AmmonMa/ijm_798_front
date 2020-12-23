import { Escola } from './../../../@services/escola/escola.model';
import { RemoveConfirmationDialogComponent } from './../../../@shared/dialogs/remove-confirmation-dialog.component';
import { TurmaService } from './../../../@services/turma/turma.service';
import { EscolaService } from './../../../@services/escola/escola.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  templateUrl: './turma-table.component.html',
  styleUrls: ['./turma-table.component.css']
})
export class TurmaTableComponent implements OnInit, AfterViewInit {
  escolaId: number;
  nomeEscola: string;
  displayedColumns: string[] = ['nome',  'qtdAlunos', 'acoes'];
  dataSource;
  constructor(
    private activatedRoute: ActivatedRoute,
    private escolaService: EscolaService,
    private turmaService: TurmaService,
    private router: Router,
    public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.escolaId = params.id;
      this.fillDataSource(this.escolaId);
    });
  }

  createPage(): void {
    this.router.navigate(['/criar-turma/' + this.escolaId]);
  }

  fillDataSource(id: number): void {
    this.escolaService.findById(id)
    .pipe(catchError( () => this.router.navigate(['/escolas'])))
    .subscribe( (result: Escola) => {
      this.nomeEscola = result.nome;
      this.dataSource = new MatTableDataSource(result.turmas);
    });
  }

  remove(id: number): void {
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.turmaService.remove(id).subscribe(() => this.fillDataSource(this.escolaId));
      }
    });
  }
}
