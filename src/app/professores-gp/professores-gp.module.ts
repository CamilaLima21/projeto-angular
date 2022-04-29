import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';



@NgModule({
  declarations: [
    ListarGpComponent,
    ProfessorGpFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessoresGpModule { }
