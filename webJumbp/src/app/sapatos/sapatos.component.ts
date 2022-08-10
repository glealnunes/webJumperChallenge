import { Component, OnInit } from '@angular/core';
import { ApiIntegradorService } from 'src/service/api-integrador.service';

@Component({
  selector: 'app-sapatos',
  templateUrl: './sapatos.component.html',
  styleUrls: ['./sapatos.component.scss']
})
export class SapatosComponent implements OnInit {
  productList = [];

  constructor(private apiIntegradorService: ApiIntegradorService) { }
  
  ngOnInit() {
    this.pegarListId();
  }

  pegarListId() {
    this.apiIntegradorService.getListId(3).subscribe(
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
