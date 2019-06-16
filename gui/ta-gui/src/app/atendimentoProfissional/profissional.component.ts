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
   resultBusca: Profissional = new Profissional();
   profissionais: Profissional[];
   profissionalBusca: Profissional = new Profissional();
   cpfduplicado: boolean = false;
   detalhes: boolean = false;
   buscaProfissional: boolean = false;
   ProfissionalExiste: boolean = false;
   gerarRelatorio: boolean = false;
   removidos: string = "";
   showLessBusca():void{
      this.buscaProfissional = false;
      this.gerarRelatorio = false;
   }
   showRelatorio(a: Profissional):void{
      this.gerarRelatorio = false;
      this.resultBusca = this.profissional;
      this.ProfissionalExiste = false;
      for(var i = 0; i<this.profissionais.length;i++){
         if(this.profissionais[i].cpf == a.cpf){
            this.profissionalBusca = this.profissionais[i];
            this.gerarRelatorio = true;
            this.ProfissionalExiste = true;
            break;
         }
      }
   }
   showDetalhes(a: Profissional): void{
      this.detalhes = !this.detalhes;
   }
   removerAndShowLess(a:Profissional):void{
      this.removerAluno(a);
      this.showLessBusca();
   }
   searchPro(a:Profissional):void{
      this.buscaProfissional = false;
      this.resultBusca = this.profissional;
      this.ProfissionalExiste = false;
      for(var i = 0; i<this.profissionais.length;i++){
         if(this.profissionais[i].cpf == a.cpf){
            this.profissionalBusca = this.profissionais[i];
            this.buscaProfissional = true;
            this.ProfissionalExiste = true;
            break;
         }
      }
   }
   updatePacienteExpediente(a:Profissional, b: Expediente,c: string): void{
      for(var i = 0; i<a.expedientes.length;i++){
         if(a.expedientes[i]===b){
            a.expedientes[i].paciente = c;
            this.updateProfissional(a);
            alert("Paciente atualizado com sucesso.");
            break;
         }
      }
   }
   updateProfissional(a: Profissional):void{
      a.detalhes = false;
      this.profissionalService.atualizar(a)
      .then(ab=>{
         if(ab){
            this.profissional= new Profissional();
            a.detalhes = true;
         }
      }).catch(erro=> alert(erro));
   }
   removerExpedienteProfissional(a:Profissional, b: Expediente):void{
      for(var i = 0; i<a.expedientes.length;i++){
         if(a.expedientes[i]===b){
            a.expedientes.splice(i,1);
            a.cancelamentos++;
            if(b.paciente == "nome" || b.paciente == ""){
               alert("Expediente cancelado com sucesso.");
            }else{
               alert("O Paciente "+b.paciente+" deve ser remarcado.");
            }
            this.updateProfissional(a);
            break;
         }
      }
   }
   insertExpedienteProfissional(a: Profissional,b: Expediente): void{
      a.expedientes.push(b);
      a.detalhes = false;
      this.profissionalService.atualizar(a)
      .then(ab=>{
         if(ab){
            this.profissional= new Profissional();
         }
      }).catch(erro=> alert(erro));
      a.detalhes = true;
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
            for(var i = 0; i<this.profissionais[aux].expedientes.length;i++){
               if(i == 0){
                  this.removidos = this.profissionais[aux].expedientes[i].paciente;
               }else{
                  this.removidos = this.removidos+", "+this.profissionais[aux].expedientes[i].paciente;
               }
            }
            if(this.removidos != ""){
               alert("Os pacientes "+this.removidos+" devem ser remarcados.");
               this.removidos = "";
            }else{
               alert("O profissional "+this.profissionais[aux].nome+" foi demitido com sucesso.");
            }
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
