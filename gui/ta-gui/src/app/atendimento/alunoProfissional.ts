import { Aluno } from "./aluno";
import { Profissional } from "./profissional";

export class AlunoProfissional {
    aluno: Aluno;
    profissional: Profissional;
    status: string;
    tipoAtendimento: string;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.aluno = new Aluno();
        this.profissional = new Profissional();
        this.status = "";
        this.tipoAtendimento = "";
    }

    copyFrom(from: AlunoProfissional): void {
        this.aluno.copyFrom(from.aluno);
        this.profissional.copyFrom(from.profissional);
        this.status = from.status;
        this.tipoAtendimento = from.tipoAtendimento;
    }
}