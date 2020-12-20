import { Escola } from './../../@services/escola/escola.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EscolaService } from './../../@services/escola/escola.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-escola',
  templateUrl: './editar-escola.component.html',
  styleUrls: ['./editar-escola.component.css']
})
export class EditarEscolaComponent implements OnInit {
  idEscola: number;
  isLoading = false;
  editarEscolaForm: FormGroup;
  public masks = {
    phone : ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cnpj: [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',  /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  };
  constructor(private escolaService: EscolaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.escolaService.findById(params.id)
          .subscribe(result => {
            if(!result) {
              return this.router.navigate(['/escolas']);
            }
            this.idEscola = params.id;
            this.editarEscolaForm.setValue({
              nome: result.nome,
              razaoSocial: result.razaoSocial,
              cnpj: result.cnpj,
              telefone: result.telefone,
              email: result.email,
              site: result.site
            });
          });
    });

    this.editarEscolaForm = new FormGroup({
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
    this.escolaService.update(this.idEscola, this.editarEscolaForm.value).subscribe(_ => {
      return this.router.navigate(['/escolas']);
    });

  }
}
