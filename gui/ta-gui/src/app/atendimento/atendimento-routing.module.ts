import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAlunoComponent } from './registro-aluno/registro-aluno.component'
import { MarcarconsultaComponent } from './marcarconsulta/marcarconsulta.component'
import { BuscarconsultaComponent } from './buscarconsulta/buscarconsulta.component'
const routes: Routes = [
    {
        path: 'registro',
        component: RegistroAlunoComponent
    },
    {
        path: 'buscarConsulta',
        component: BuscarconsultaComponent
    },
    {
        path: 'marcarConsulta',
        component: MarcarconsultaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
