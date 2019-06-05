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
import { AtendimentoRoutingModule } from './atendimento-routing.module'

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
    MarcarconsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AtendimentoModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AtividadeEmCampoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
