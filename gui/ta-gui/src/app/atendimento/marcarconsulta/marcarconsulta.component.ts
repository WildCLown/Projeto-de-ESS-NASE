import { Component, OnInit } from '@angular/core';
import { AlunoProfissionalService } from '../alunoProfissional.service'
import { AlunoProfissional } from '../alunoProfissional';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-marcarconsulta',
  templateUrl: './marcarconsulta.component.html',
  styleUrls: ['./marcarconsulta.component.css']
})
export class MarcarconsultaComponent implements OnInit {

    alunosProfissionais: AlunoProfissional[];
    nomeAluno: string;
    nomePro: string;
    consulta: Consulta = new Consulta();
    mensagemErro = false;
    mensagemNaoAchou = false;
    mensagemOk = false;

    constructor(private aps: AlunoProfissionalService, private cs: ConsultaService) { }

    onMove(): void {
        this.mensagemOk = false;
        this.mensagemErro = false;
        this.mensagemNaoAchou = false;
    }
  
    criarConsulta(c: Consulta): void {
        if(this.procurarAPRegistrado()) {
            this.cs.criar(c).then( ctemp => {
                if(ctemp) {
                    this.consulta = new Consulta();
                    this.nomeAluno = null;
                    this.nomePro = null;
                    this.mensagemOk = true;
                } else {
                    this.mensagemErro = true;
                }
            })
        } else {
            this.mensagemNaoAchou = true;
        }
    }

    procurarAPRegistrado(): boolean {
        for(let ap of this.alunosProfissionais) {
            if((this.nomePro == ap.profissional.nome) && (this.nomeAluno == ap.aluno.nome)){
                this.consulta.alunoProfissional.copyFrom(ap);
                return true;
            }
        }
        return false;
    }

    ngOnInit(): void {
        this.aps.getAlunosProfissionais()
        .then(aps1 => this.alunosProfissionais = aps1).
        catch(erro => alert(erro))
    }

}
