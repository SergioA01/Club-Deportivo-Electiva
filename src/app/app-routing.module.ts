import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantillaBasicaComponent } from './view/templates/plantilla-basica/plantilla-basica.component';
import { MiembrosBaseComponent } from './view/pages/miembros/miembros-base/miembros-base.component';
import { EventosBaseComponent } from './view/pages/eventos/eventos-base/eventos-base.component';
import { DisciplinaBaseComponent } from './view/pages/disciplinas/disciplina-base/disciplina-base.component';
import { PanelBienvenidaComponent } from './view/templates/panel-bienvenida/panel-bienvenida.component';
import { NosotrosComponent } from './view/templates/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: PanelBienvenidaComponent, pathMatch: 'full'},
  {path: 'miembros', component: MiembrosBaseComponent, pathMatch: 'full'},
  {path: 'eventos', component: EventosBaseComponent, pathMatch: 'full'},
  {path: 'disciplinas', component: DisciplinaBaseComponent, pathMatch: 'full'},
  {path: 'nosotros', component: NosotrosComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
