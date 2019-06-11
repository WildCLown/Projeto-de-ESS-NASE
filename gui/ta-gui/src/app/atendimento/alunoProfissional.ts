import { Aluno } from "./aluno";
import { Profissional } from "./profissional";

export class AlunoProfissional {
    aluno: Aluno;
    profissional: Profissional;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.aluno = new Aluno();
        this.profissional = new Profissional();
    }
}