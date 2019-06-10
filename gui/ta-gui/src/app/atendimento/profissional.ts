export class Profissional {
    nome: string;
    curso: string;
    cpf: string;
    genero: boolean;
    telefone: string;
 
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.curso = "";
      this.telefone= "";
      this.genero = null;
    }
  
  }
  