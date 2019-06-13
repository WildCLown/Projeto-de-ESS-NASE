import { Consulta } from '../../gui/ta-gui/src/app/atendimento/consulta';
import { MetodosUteis } from './metodosUteis';

export class CadastroConsulta {
    consultas: Consulta[];
    mu: MetodosUteis;
    criar(consulta: Consulta): Consulta {
        var result = null;
        if (this.mu.consultaEmBranco(consulta)) {
            result = new Consulta();
            result.copyFrom(consulta);
            this.consultas.push(result);
        }
        return result;
    }

    getConsultas(): Consulta[] {
        return this.consultas;
    }
}
