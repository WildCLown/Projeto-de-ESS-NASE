export class Expediente {
  data: string;
  inicio: string;
  fim: string;
  paciente: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.data = "01/01/1999";
    this.inicio = "HH:MM";
    this.fim = "HH:MM";
    this.paciente = "nome";
  }

  clone(): Expediente {
    var expediente: Expediente = new Expediente();
    expediente.copyFrom(this);
    return expediente;
  }

  copyFrom(from: Expediente): void {
    this.data = from.data;
    this.inicio = from.inicio;
    this.fim = from.fim;
    this.paciente = from.paciente;
  }
}
