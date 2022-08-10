import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiIntegradorService {
  url = 'http://localhost:8888/api';
  constructor(private httpCliente: HttpClient) { }

  getListId(id: number) {
    return this.httpCliente.get(`${this.url}/V1/categories/${id}`);
  }

}
