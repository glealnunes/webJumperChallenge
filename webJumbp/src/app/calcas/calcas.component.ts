import { Component, OnInit } from '@angular/core';
import { ApiIntegradorService } from 'src/service/api-integrador.service';

@Component({
  selector: 'app-calcas',
  templateUrl: './calcas.component.html',
  styleUrls: ['./calcas.component.scss']
})
export class CalcasComponent implements OnInit {
  productList = [];
  
  constructor(private apiIntegradorService: ApiIntegradorService) { }

  ngOnInit() {
    this.pegarListId();
  }
  pegarListId() {
    this.apiIntegradorService.getListId(2).subscribe(
      res => {
        let result = JSON.parse(JSON.stringify(res))
        this.productList = result['items']
      },
      error => {
        console.log("erro", error);
      }
    );
  }
}
