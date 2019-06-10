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
  
  }
  