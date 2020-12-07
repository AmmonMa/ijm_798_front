import { RemoveConfirmationDialogComponent } from './../../@shared/dialogs/remove-confirmation-dialog.component';
import { TurmaService } from './../../@services/turma/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { EscolaService } from './../../@services/escola/escola.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-turmas',
  templateUrl: './listar-turmas.component.html',
  styleUrls: ['./listar-turmas.component.css']
})
export class ListarTurmasComponent implements OnInit, AfterViewInit {
  idEscola: number;
  nomeEscola: string;
  displayedColumns: string[] = ['id', 'nome',  'qtdAlunos', 'acoes'];
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
      this.idEscola = params.id;
      this.fillDataSource(this.idEscola);
    });
  }

  createPage(): void {
    this.router.navigate(['/criar-turma/' + this.idEscola]);
  }

  fillDataSource(id: number): void {
    this.escolaService.findById(id).subscribe(result => {
      this.nomeEscola = result.nome;
      this.dataSource = new MatTableDataSource(result.turmas);
    });
  }

  remove(id: number): void {
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.turmaService.remove(id).subscribe(_ => this.fillDataSource(this.idEscola));
      }
    });
  }
}
