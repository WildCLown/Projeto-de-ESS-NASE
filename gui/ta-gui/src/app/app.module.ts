import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AtividadeEmCampoComponent } from './atividadeEmCampo.component';
import { AtividadeEmCampoService } from './atividadeEmCampo.service';
import { AtendimentoComponent } from './Atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    AtividadeEmCampoComponent,
    AtendimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'atividadeEmCampo',
        component: AtividadeEmCampoComponent
      },
      {
          path: 'Atendimento',
          component: AtendimentoComponent
      }
    ])
  ],
  providers: [AtividadeEmCampoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
