import { AlunoProfissional } from '../../gui/ta-gui/src/app/atendimento/alunoProfissional';
import { Aluno } from '../../gui/ta-gui/src/app/atendimento/aluno';
import { Profissional } from '../../gui/ta-gui/src/app/atendimento/profissional';

export class CadastroAlunoProfissional {

    alunosProfissionais: AlunoProfissional[];

    criar(alunoProfissional: AlunoProfissional): AlunoProfissional {
        var result = null;
        if (this.apEmBranco(alunoProfissional)) {
            result = new AlunoProfissional();
            result.copyFrom(alunoProfissional);
            this.alunosProfissionais.push(result);
        }
        return result;
    }

    apEmBranco(alunoProfissional: AlunoProfissional): boolean {
        if (this.alunoEmBranco(alunoProfissional.aluno) || this.profissionalEmBranco(alunoProfissional.profissional) || this.stringBranco(alunoProfissional.status) || this.stringBranco(alunoProfissional.status)) {
            return false;
        } else {
            return true;
        }
    }

    profissionalEmBranco(pro: Profissional): boolean {
        if(this.stringBranco(pro.especialidade) || this.stringBranco(pro.nome)){
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

    stringBranco(campo: string): boolean {
        if(campo === "" || campo === null) {
            return true;
        } else {
            return false;
        }
    }

}
