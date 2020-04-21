import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-listar-albums',
  templateUrl: './listar-albums.component.html',
  styleUrls: ['./listar-albums.component.css']
})
export class ListarAlbumsComponent implements OnInit {

  // array onde será armazenado a resposta da API
  albums: Array<any>;

  // direto no construtor, uma instancia de AlbumService
  constructor(private service:AlbumService) { }

  ngOnInit(): void {
    // assim que o componente for inteiramente carregado, esse método será chamado
    this.listar();
  }

  listar(){
    // utiliza o servico de AlbumService instanciado para chamar o metodo
    // listarAlbums e utiliza uma arrow function para armazenar o resultado no array albums
    this.service.listarAlbums().subscribe(dados => this.albums = dados);
  }

}
