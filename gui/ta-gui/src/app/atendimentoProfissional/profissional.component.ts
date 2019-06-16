import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Profissional } from './profissional';
import { ProfissionalService } from './profissional.service';
import { Expediente } from './expediente';

@Component({
  selector: 'app-root',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {
   constructor(private profissionalService: ProfissionalService) {}

   profissional: Profissional = new Profissional();
   profissionais: Profissional[];
   cpfduplicado: boolean = false;
   detalhes: boolean = false;
   showDetalhes(a: Profissional): void{
      this.detalhes = !this.detalhes;
      
   }
   insertExpedienteProfissional(a: Profissional,b: Expediente): void{
      a.expedientes.push(b);
      this.profissionalService.atualizar(a)
      .then(ab=>{
         if(ab){
            this.profissional= new Profissional();
         }
      }).catch(erro=> alert(erro));
   }
   criarAluno(a: Profissional): void {
     this.profissionalService.criar(a)
        .then(ab => {
           if (ab) {
              this.profissionais.push(ab);
              this.profissional = new Profissional();
           } else {
              this.cpfduplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }

   removerAluno(a: Profissional): void{
      this.profissionalService.remover(a)
      .then(ab =>{
         if(ab){
            var aux = this.profissionais.findIndex(tr => tr.cpf === ab.cpf);
            var randm = this.profissionais.splice(aux,1);
         }
      })
      .catch(erro => alert(erro));
   }
   onMove(): void {
      this.cpfduplicado = false;
   }

   ngOnInit(): void {
     this.profissionalService.getAlunos()
         .then(as => this.profissionais = as)
         .catch(erro => alert(erro));
   }

}
