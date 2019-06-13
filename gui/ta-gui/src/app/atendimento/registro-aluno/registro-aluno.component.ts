import { Component, OnInit } from '@angular/core';
import { AlunoProfissional } from '../alunoProfissional'
import { AlunoProfissionalService } from '../alunoProfissional.service'
import { Aluno } from '../aluno';

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
    mensagemErro: boolean = false;
    mensagemOk: boolean = false;

    criarAlunoProfissional(ap: AlunoProfissional): void {
        this.aps.criar(ap).then( aptemp => {
            if(aptemp) {
                this.alunosProfissionais.push(aptemp);
                this.alunoProfissional = new AlunoProfissional();
                this.mensagemOk = true;
            } else {
                this.mensagemErro = true;
            }

        })
        .catch(erro => alert(erro))
    }

    mostrarLista() {
        if(this.alunosProfissionais.length > 0) {
            this.mostraLista = true;
        }
    }

    preencher(apDaLista: AlunoProfissional) {
        var a: Aluno = apDaLista.aluno;
        this.alunoProfissional.aluno = a;
        this.mostraLista = false;
    }

    onMove(): void {
        this.mensagemErro = false;
        this.mensagemOk = false;
    }
    
    ngOnInit(): void  {
        this.aps.getAlunosProfissionais()
        .then(aps1 => this.alunosProfissionais = aps1).
        catch(erro => alert(erro))
    }

}
