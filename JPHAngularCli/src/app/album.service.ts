import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  //url onde a requisição será feita
  albunsUrl = 'https://jsonplaceholder.typicode.com/albums';

  // HttpClient passado direto no construtor
  constructor(private service:HttpClient) { }

  listarAlbums(){
    // utiliza o servico passado no construtor, envia um get
    // que espera um array de qualquer coisa
    return this.service.get<any[]>(`${this.albunsUrl}`);
  }

}
