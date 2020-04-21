import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAlbumsComponent } from './Album/listar-albums/listar-albums.component';


//declaração das rotas.
//todas as rotas devem ser declaradas aqui.
const routes: Routes = [
  {path:'getAlbums', component:ListarAlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
