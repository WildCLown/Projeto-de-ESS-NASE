import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AtividadeEmCampoComponent } from './atividadeEmCampo/atividadeEmCampo.component';
import { AtividadeEmCampoService } from './atividadeEmCampo/atividadeEmCampo.service';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { RegistroAlunoComponent } from './atendimento/registro-aluno/registro-aluno.component';
import { BuscarconsultaComponent } from './atendimento/buscarconsulta/buscarconsulta.component';
import { MarcarconsultaComponent } from './atendimento/marcarconsulta/marcarconsulta.component';
import { AlunoProfissionalService } from './atendimento/alunoProfissional.service'
import { ConsultaService } from './atendimento/consulta.service'
//Texero Stuff
//Texero Stuff
import { ProfissionalComponent } from './atendimentoProfissional/profissional.component';
import { ProfissionalService } from './atendimentoProfissional/profissional.service';

const appRoutes: Routes = [
    { path: 'atividadeEmCampo', component: AtividadeEmCampoComponent },
    { path: 'atendimento', component: AtendimentoComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AtividadeEmCampoComponent,
    AtendimentoComponent,
    RegistroAlunoComponent,
    BuscarconsultaComponent,
    MarcarconsultaComponent,
    ProfissionalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AtendimentoModule, 
    RouterModule.forRoot(/*appRoutes*/
      [
        {
          path: 'atividadeEmCampo',
          component: AtividadeEmCampoComponent
        },
        {
          path: 'profissional',
          component: ProfissionalComponent
        } 
      ]
      )
  ],
  providers: [AtividadeEmCampoService, AlunoProfissionalService, ConsultaService,ProfissionalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
