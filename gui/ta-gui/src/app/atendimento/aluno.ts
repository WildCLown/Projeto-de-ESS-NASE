export class Aluno {
    nome: string;
    curso: string;
    cpf: string;
    genero: boolean;
    telefone: string;
    tipoAtendimento: string;
 
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.curso = "";
      this.telefone= "";
      this.genero = null;
      this.tipoAtendimento = "";
    }
  
    clone(): Aluno {
      var aluno: Aluno = new Aluno();
      aluno.copyFrom(this);
      return aluno;
    }
  
    copyFrom(from: Aluno): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.curso = from.curso;
      this.telefone = from.telefone;
      this.genero = from.genero;
      this.tipoAtendimento = from.tipoAtendimento;
    }
  }
  