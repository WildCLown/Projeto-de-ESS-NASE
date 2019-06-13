import { Component, OnInit } from '@angular/core';
import { Consulta } from "../consulta"
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-buscarconsulta',
  templateUrl: './buscarconsulta.component.html',
  styleUrls: ['./buscarconsulta.component.css']
})
export class BuscarconsultaComponent implements OnInit {
  
  consulta: Consulta = new Consulta;
  consultas: Consulta[];
  consultasQuery: Consulta[];

  mostraLista: boolean = false;
  mostraConsultas: boolean = false;
  
  constructor(private cs: ConsultaService) { }
  
  ngOnInit(): void {
    this.cs.getConsultas()
      .then(aps1 => this.consultas = aps1).
      catch(erro => alert(erro))
  }


}
