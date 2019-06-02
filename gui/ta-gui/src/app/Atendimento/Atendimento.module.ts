import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AtendimentoComponent } from './Atendimento.component';
import { RegistroAlunoComponent } from './RegistroAluno/RegistroAluno.component'

@NgModule({
  declarations: [
    AtendimentoComponent,
    RegistroAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forChild([
      {
          path: 'RegistroAluno',
          component: RegistroAlunoComponent
      }
      {
        path: 'Atendimento',
        component: AtendimentoComponent
    }
    ])
  ],
  bootstrap: [AtendimentoComponent]
})
export class AppModule { }
