import { Component, OnInit } from '@angular/core';
import { AlunoProfissionalService } from '../alunoProfissional.service'
import { AlunoProfissional } from '../alunoProfissional';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-marcarconsulta',
  templateUrl: './marcarconsulta.component.html',
  styleUrls: ['./marcarconsulta.component.css']
})
export class MarcarconsultaComponent implements OnInit {

  alunosProfissionais: AlunoProfissional[];
  consulta: Consulta = new Consulta();
  mensagemErro = false;

  constructor(private aps: AlunoProfissionalService, private cs: ConsultaService) { }

  onMove(): void {
      this.mensagemErro = false;
  }
  
  criarConsulta() {
      
  }
  ngOnInit(): void {
    this.aps.getAlunosProfissionais()
      .then(aps1 => this.alunosProfissionais = aps1).
      catch(erro => alert(erro))
  }

}
