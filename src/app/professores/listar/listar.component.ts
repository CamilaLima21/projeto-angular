import { ProfessoresModel } from './../professores.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  empresaFilho : string = '';

  tmp : any = [
    {
    nomeCompleto :{
      nome: 'Fabrizio'
    }
    },
    {
      nomeCompleto : null
    }
]

  // professores = [
  //   { id : 1, nome: "Fabrizio", email: "fabrizio@grandeporte.com.br" },
  //   { id : 2, nome: "Nelson", email: "nelson@grandeporte.com.br" }
  // ];

  professores : ProfessoresModel[] = [];

  //private activatedRoute : ActivatedRoute
  // modificador de acesso, nome da variável e Classe do objeto a ser injetado
  constructor(
    private activatedRoute: ActivatedRoute,
    private professoresService: ProfessoresService,
    private router:Router
  ) {
    // this.activatedRoute = new ActivatedRoute();
  }

  ngOnInit(): void {

    this.getAll();

    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onDelete(id: number){
    this.professoresService.delete(id)
      .subscribe(
        ()=>{
          console.log(`Deletou o registro com id ${id}`);
          //this.router.navigate(['/professores/#']);

          this.getAll();
        }
      );
  }

  private getAll(){

    this.professoresService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
    );

  }



}
