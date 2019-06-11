import { Component, OnInit } from '@angular/core';
import { AlunoProfissional } from '../alunoProfissional'
import { AlunoProfissionalService } from '../alunoProfissional.service'

@Component({
  selector: 'app-registro-aluno',
  templateUrl: './registro-aluno.component.html',
  styleUrls: ['./registro-aluno.component.css']
})
export class RegistroAlunoComponent implements OnInit {

    constructor(private aps: AlunoProfissionalService) { }

    alunoProfissional: AlunoProfissional = new AlunoProfissional();
    alunosProfissionais: AlunoProfissional[];
    mostraLista: boolean = false;

    criarAlunoProfissional(ap: AlunoProfissional): void {
        this.aps.criar(ap).then( aptemp => {
            this.alunosProfissionais.push(aptemp);
        })
        .catch(erro => alert(erro))
    }

    mostrarLista() {
        this.mostraLista = true;
    }

    preencher() {}
    
    ngOnInit() {
    }

}
