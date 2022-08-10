import { Component, OnInit } from '@angular/core';
import { ApiIntegradorService } from 'src/service/api-integrador.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent implements OnInit {
  productList = [];

  constructor(private apiIntegradorService: ApiIntegradorService) { }
  
  ngOnInit() {
    this.pegarListId();
  }

  pegarListId() {
    this.apiIntegradorService.getListId(1).subscribe(
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
