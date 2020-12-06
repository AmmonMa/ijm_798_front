import { EscolaService } from './../../@services/escola/escola.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-escola',
  templateUrl: './criar-escola.component.html',
  styleUrls: ['./criar-escola.component.css']
})
export class CriarEscolaComponent implements OnInit {
  criarEscolaForm: FormGroup;

  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {
    this.criarEscolaForm = new FormGroup({
      nome: new FormControl('', {validators: [ Validators.required ]}),
      razaoSocial: new FormControl(''),
      cnpj: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl('', { validators: [Validators.required, Validators.email] } ),
      site: new FormControl('')
    });
  }

  onSubmit(): void {

  }
}
