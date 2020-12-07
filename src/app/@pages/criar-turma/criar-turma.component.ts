import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from './../../@services/turma/turma.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-criar-turma',
  templateUrl: './criar-turma.component.html',
  styleUrls: ['./criar-turma.component.css']
})
export class CriarTurmaComponent implements OnInit, AfterViewInit {
  idEscola: number;
  isLoading = false;
  criarTurmaForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private turmaService: TurmaService,
    private router: Router) {}

  ngOnInit(): void {
    this.criarTurmaForm = new FormGroup({
      nome: new FormControl('', {validators: [ Validators.required ]}),
      qtdAlunos: new FormControl(0, {validators: [ Validators.required ]}),
      escolaId: new FormControl(0, {validators: [ Validators.required ]})
    });
  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idEscola = +params.id;
      this.criarTurmaForm.setValue({
        nome: '',
        qtdAlunos: 0,
        escolaId: +params.id
      });
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.turmaService.create(this.criarTurmaForm.value).subscribe(_ => {
      return this.router.navigate(['/turmas/' + this.idEscola ]);
    });

  }
}
