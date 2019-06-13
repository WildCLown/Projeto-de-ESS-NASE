import { AlunoProfissional } from '../../gui/ta-gui/src/app/atendimento/alunoProfissional';
import { Aluno } from '../../gui/ta-gui/src/app/atendimento/aluno';
import { Profissional } from '../../gui/ta-gui/src/app/atendimento/profissional';
import { MetodosUteis } from './metodosUteis'

export class CadastroAlunoProfissional {

    alunosProfissionais: AlunoProfissional[] = [];
    mu: MetodosUteis = new MetodosUteis();

    criar(alunoProfissional: AlunoProfissional): AlunoProfissional {
        var result = null;
        if (this.mu.apEmBranco(alunoProfissional)) {
            result = new AlunoProfissional();
            result.copyFrom(alunoProfissional);
            this.alunosProfissionais.push(result);
        }
        return result;
    }    

    getAlunosProfissionais(): AlunoProfissional[] {
        return this.alunosProfissionais;
    }

}
