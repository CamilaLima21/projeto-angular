import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.scss']
})
export class ListarGpComponent implements OnInit {

  @Input()
  empresaFilhoGp : string = '';

  professoresGp : any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private professoresGpService : ProfessoresGpService,
    private router : Router) { }

  ngOnInit() : void {

    this.professoresGp.getAll();
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }


}
