import { Router } from '@angular/router';
import { EscolaService } from './../../@services/escola/escola.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-escola',
  templateUrl: './criar-escola.component.html',
  styleUrls: ['./criar-escola.component.css']
})
export class CriarEscolaComponent implements OnInit {
  isLoading = false;
  criarEscolaForm: FormGroup;
  public masks = {
    phone : ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cnpj: [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',  /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  };
  constructor(private escolaService: EscolaService, private router: Router) {}

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
    this.isLoading = true;
    this.escolaService.create(this.criarEscolaForm.value).subscribe(_ => {
      return this.router.navigate(['/escolas']);
    });

  }
}
