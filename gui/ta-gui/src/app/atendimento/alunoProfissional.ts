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
}