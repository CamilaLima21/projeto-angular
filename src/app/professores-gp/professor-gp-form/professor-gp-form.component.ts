import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-gp-form',
  templateUrl: './professor-gp-form.component.html',
  styleUrls: ['./professor-gp-form.component.scss']
})
export class ProfessorGpFormComponent implements OnInit {


  //1-> Alocando a variável que terá os ocntroles do formulário
  meuFormGp : FormGroup = new FormGroup({});

  //2-> Injetar o FormBuilder para ajudar a criar os controles do form
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
