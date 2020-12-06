import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { EscolaService } from './../../@services/escola/escola.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-escolas',
  templateUrl: './listar-escolas.component.html',
  styleUrls: ['./listar-escolas.component.css']
})
export class ListarEscolasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'telefone', 'email', 'acoes'];
  dataSource;
  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.escolaService.findAll().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
    });
  }
}
