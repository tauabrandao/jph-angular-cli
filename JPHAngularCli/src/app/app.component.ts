import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JPHAngularCli';

  constructor(private router: Router) { }

  //método chamado na barra de navegação
  ListarAlbuns() {
    //navigate deve chamar o que foi mapeado no arquivo app-routing.module.ts
    this.router.navigate(["getAlbums"]);
  }

  ListarComments() {
    this.router.navigate(["getComments"]);
  }
}
