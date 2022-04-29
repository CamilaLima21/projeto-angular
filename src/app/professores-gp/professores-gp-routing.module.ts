import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGpComponent } from './listar-gp/listar-gp.component';

const routes: Routes = [
  {path: 'professores-gp', component: ListarGpComponent},
  {path: 'professores-gp/criar', component: ProfessorGpFormComponent},
  {path: 'professores-gp/editar/:id', component: ProfessorGpFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresGpRoutingModulegModule { }
