import { Turma } from './../turma/turma.model';
export interface Escola {
  id: number;
  nome: string;
  razaoSocial: string;
  cnpj: string;
  telefone: string;
  email: string;
  site: string;
  turmas: Turma[];
}
