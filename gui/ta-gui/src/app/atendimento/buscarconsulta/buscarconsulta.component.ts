import { Component, OnInit } from '@angular/core';
import { Consulta } from "../consulta"

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
  
  constructor() { }
  
  ngOnInit() {
  
  }

}
