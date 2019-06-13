import { AlunoProfissional } from './alunoProfissional';

export class Consulta {
    
    alunoProfissional: AlunoProfissional;
    mes: number;
    dia: number;
    hora: number;
    minuto: number;
 
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.alunoProfissional = new AlunoProfissional();
      this.mes = null;
      this.dia = null;
      this.hora = null;
      this.minuto = null;
    }

    copyFrom(from: Consulta): void {
      this.alunoProfissional.copyFrom(from.alunoProfissional);
      this.mes = from.mes;
      this.dia = from.dia;
      this.hora = from.hora;
      this.minuto = from.minuto;
    }
  
  }
  