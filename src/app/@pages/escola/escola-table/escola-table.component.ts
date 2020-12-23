import { RemoveConfirmationDialogComponent } from './../../../@shared/dialogs/remove-confirmation-dialog.component';
import { EscolaService } from './../../../@services/escola/escola.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/internal/operators/map';

@Component({
  templateUrl: './escola-table.component.html',
  styleUrls: ['./escola-table.component.css']
})
export class EscolaTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource;

  constructor(
    private escolaService: EscolaService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.breakpointObserver
          .observe(Breakpoints.Handset)
          .pipe( map(result => result.matches) )
          .subscribe( (result) =>
            this.displayedColumns = (result === true) ? ['nome', 'acoes']  : ['nome', 'telefone', 'email', 'acoes']
          );
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
