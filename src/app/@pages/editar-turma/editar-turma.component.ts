import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from './../../@services/turma/turma.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.css']
})
export class EditarTurmaComponent implements OnInit {
  idTurma: number;
  idEscola: number;
  isLoading = false;
  editarTurmaForm: FormGroup;

  constructor(private turmaService: TurmaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.turmaService.findById(params.id)
          .subscribe(result => {
            if(!result) {
              return this.router.navigate(['/escolas'])
            }
            this.idTurma = params.id;
            this.idEscola = result.escolaId;
            this.editarTurmaForm.setValue({
              nome: result.nome,
              qtdAlunos: result.qtdAlunos,
              escolaId: result.escolaId
            });
          });

    });

    this.editarTurmaForm = new FormGroup({
      nome: new FormControl('', {validators: [ Validators.required ]}),
      qtdAlunos: new FormControl(0, {validators: [ Validators.required ]}),
      escolaId: new FormControl(0, {validators: [ Validators.required ]})
    });


  }

  onSubmit(): void {
    this.isLoading = true;
    this.turmaService.update(this.idTurma, this.editarTurmaForm.value).subscribe(_ => {
      return this.router.navigate(['/turmas/' + this.idEscola]);
    });

  }
}
