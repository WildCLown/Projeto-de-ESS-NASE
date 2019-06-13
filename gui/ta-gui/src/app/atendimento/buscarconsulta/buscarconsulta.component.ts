import { Component, OnInit } from '@angular/core';
import { Consulta } from "../consulta"
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-buscarconsulta',
  templateUrl: './buscarconsulta.component.html',
  styleUrls: ['./buscarconsulta.component.css']
})
export class BuscarconsultaComponent implements OnInit {
  
  nomePro: string;
  mes: number;
  consultas: Consulta[];
  consultasQuery: Consulta[];


  mostraLista: boolean = false;
  mostraConsultas: boolean = false;
  mensagemErro: boolean = false;

  constructor(private cs: ConsultaService) { }
  
  mostrarConsultas() {
    if(this.nomePro != null && this.mes != null) {
        this.consultasQuery = [];
        for (let c of this.consultas) {
        if((c.alunoProfissional.profissional.nome === this.nomePro) && (c.mes === this.mes)){
            this.consultasQuery.push(c);
        } 
        }
        if(this.consultasQuery.length > 0) {
            this.mostraConsultas = true;
        }
    } else {
        this.mensagemErro = true;
    }
    
  }

  onMove(): void {
    this.mensagemErro = false;
  }
  ngOnInit(): void {
    this.cs.getConsultas()
      .then(c1 => this.consultas = c1).
      catch(erro => alert(erro))
  }


}
