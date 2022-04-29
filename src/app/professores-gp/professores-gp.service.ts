import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private HttpClient: HttpClient) { }

  getAll() {
    return this.HttpClient.get('http://localhost:8080/professores-gp');
  }
}
