import { RemoveConfirmationDialogComponent } from './../../../@shared/dialogs/remove-confirmation-dialog.component';
import { EscolaService } from './../../../@services/escola/escola.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './escola-table.component.html',
  styleUrls: ['./escola-table.component.css']
})
export class EscolaTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'telefone', 'email',  'acoes'];
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
    this.escolaService.findAll().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result);
    });
  }

  remove(id: number): void {
    const dialogRef = this.dialog.open(RemoveConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.escolaService.remove(id).subscribe( () => this.fillDataSource());
      }
    });
  }
}
