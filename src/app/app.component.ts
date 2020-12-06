import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Cadastro de Escolas';

  constructor() {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }



}
