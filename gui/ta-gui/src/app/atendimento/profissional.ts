export class Profissional {
    nome: string;
    especialidade: string;
 
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.especialidade = "";
    }

    copyFrom(from: Profissional): void {
      this.nome = from.nome;
      this.especialidade = from.especialidade;
    }
  
  }
  