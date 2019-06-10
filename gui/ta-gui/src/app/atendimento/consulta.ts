import { Aluno } from './aluno'
import { Profissional } from './profissional'

export class Consulta {
    
    aluno: Aluno;
    profissional: Profissional;
    mes: number;
    dia: number;
    hora: number;
    minuto: number;
 
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.aluno = new Aluno();
      this.profissional = new Profissional();
      this.mes = null;
      this.dia = null;
      this.hora = null;
      this.minuto = null;
    }
  
  }
  