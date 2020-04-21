import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAlbumsComponent } from './Album/listar-albums/listar-albums.component';
import { ListarCommentsComponent } from './Comment/listar-comments/listar-comments.component';


//declaração das rotas.
//todas as rotas devem ser declaradas aqui.
const routes: Routes = [
  {path:'getAlbums', component:ListarAlbumsComponent},
  {path:'getComments', component:ListarCommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
