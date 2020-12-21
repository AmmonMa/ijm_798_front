import { Escola } from './../../../@services/escola/escola.model';
import { EscolaService } from './../../../@services/escola/escola.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './escola-form.component.html',
  styleUrls: ['./escola-form.component.css']
})
export class EscolaFormComponent implements OnInit {

  isLoading = false;
  escolaForm: FormGroup;

  public masks = {
    phone : ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cnpj: [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',  /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  };

  get escola() { return this.activatedRoute.snapshot.data['escola'] as Escola; }

  constructor(private escolaService: EscolaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}



  ngOnInit(): void {
    this.escolaForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', {validators: [ Validators.required ]}),
      razaoSocial: new FormControl(''),
      cnpj: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl('', { validators: [Validators.required, Validators.email] } ),
      site: new FormControl('')
    });

    this.setupForm();
  }

  setupForm(): void {
    if (!this.escola || !Object.keys(this.escola).length) {
      return;
    }

    this.escolaForm.patchValue({
      id: this.escola.id,
      nome: this.escola.nome,
      razaoSocial: this.escola.razaoSocial,
      cnpj: this.escola.cnpj,
      telefone: this.escola.telefone,
      email: this.escola.email,
      site: this.escola.site
    });
  }

  onSubmit(): void {
    this.isLoading = true;

    this.escolaService.save(this.escolaForm.value as Escola).subscribe( () => {
      return this.router.navigate(['/escolas']);
    });

  }
}
