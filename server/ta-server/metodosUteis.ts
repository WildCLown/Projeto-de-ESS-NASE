import { Consulta } from '../../gui/ta-gui/src/app/atendimento/consulta';
import { AlunoProfissional } from '../../gui/ta-gui/src/app/atendimento/alunoProfissional';
import { Aluno } from '../../gui/ta-gui/src/app/atendimento/aluno';
import { Profissional } from '../../gui/ta-gui/src/app/atendimento/profissional';

export class MetodosUteis {
    stringBranco(campo: string): boolean {
        if (campo === "" || campo === null) {
            return true;
        } else {
            return false;
        }
    }

    alunoEmBranco(aluno: Aluno): boolean {
        if (this.stringBranco(aluno.cpf) || this.stringBranco(aluno.nome) || this.stringBranco(aluno.curso) || this.stringBranco(aluno.telefone) || this.stringBranco(aluno.genero)) {
            return true;
        } else {
            return false;
        }
    }

    profissionalEmBranco(pro: Profissional): boolean {
        if (this.stringBranco(pro.especialidade) || this.stringBranco(pro.nome)) {
            return true;
        } else {
            return false;
        }
    }

    apEmBranco(alunoProfissional: AlunoProfissional): boolean {
        if (this.alunoEmBranco(alunoProfissional.aluno) || this.profissionalEmBranco(alunoProfissional.profissional) || this.stringBranco(alunoProfissional.status) || this.stringBranco(alunoProfissional.status)) {
            return false;
        } else {
            return true;
        }
    }

    numeroNulo(num: number): boolean {
        if(num === null) {
            return true;
        } else {
            return false;
        }
    }

    consultaEmBranco(consulta: Consulta):boolean {
        if (this.apEmBranco(consulta.alunoProfissional) || this.numeroNulo(consulta.mes) || this.numeroNulo(consulta.dia) || this.numeroNulo(consulta.hora) || this.numeroNulo(consulta.minuto)) {
            return false;
        } else {
            return true;
        }
    }
}