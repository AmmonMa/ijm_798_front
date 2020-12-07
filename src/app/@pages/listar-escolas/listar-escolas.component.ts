import { RemoveConfirmationDialogComponent } from './../../@shared/dialogs/remove-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { EscolaService } from './../../@services/escola/escola.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-escolas',
  templateUrl: './listar-escolas.component.html',
  styleUrls: ['./listar-escolas.component.css']
})
export class ListarEscolasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nome',  'acoes'];
  dataSource;
  constructor(
    private escolaService: EscolaService,
    public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.fillDataSource();
  }

  fillDataSource(): void {
    this.escolaService.findAll().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
    });
  }

  remove(id: number): void {
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.escolaService.remove(id).subscribe(_ => this.fillDataSource());
      }
    });
  }
}
