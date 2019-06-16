import{Expediente} from './expediente';
export class Profissional {
  nome: string;
  cpf: string;
  email: string;
  detalhes: boolean;
  expediente: Expediente;
  expedientes: Expediente[];
  cancelamentos: number;
  informacoes: string;
  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.detalhes = false;
    this.expediente = new Expediente();
    this.expedientes = [];
    this.cancelamentos = 0;
    this.informacoes = "Favor adicionar informações.";
  }

  clone(): Profissional {
    var aluno: Profissional = new Profissional();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Profissional): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.detalhes = from.detalhes;
    this.expediente = from.expediente;
    this.expedientes = from.expedientes;
    this.cancelamentos = from.cancelamentos;
    this.informacoes = from.informacoes;
  }
}
