import { Turma } from './../../../@services/turma/turma.model';
import { TurmaService } from './../../../@services/turma/turma.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit {
  escolaId: number;
  isLoading = false;
  turmaForm: FormGroup;

  get turma() { return this.activatedRoute.snapshot.data['turma'] as Turma; }


  constructor(private turmaService: TurmaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.turmaForm = new FormGroup({
        id: new FormControl(0),
        nome: new FormControl('', {validators: [ Validators.required ]}),
        qtdAlunos: new FormControl(0, {validators: [ Validators.required ]}),
        escolaId: new FormControl(0, {validators: [ Validators.required ]})
      });

      this.activatedRoute.params.subscribe( (params) => this.escolaId = +params.escolaId );

      this.setupForm();
  }

  setupForm(): void {
    if(!this.turma || !Object.keys(this.turma).length) {
      return;
    }

    this.escolaId = this.turma.escolaId;
    this.turmaForm.patchValue({
      id: this.turma.id,
      nome: this.turma.nome,
      qtdAlunos: this.turma.qtdAlunos,
      escolaId: this.turma.escolaId
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.turmaForm.patchValue({ escolaId: this.escolaId });
    this.turmaService.save(this.turmaForm.value).subscribe( () => {
      return this.router.navigate(['/turmas/' + this.escolaId]);
    });

  }
}
