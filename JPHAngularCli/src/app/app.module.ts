import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlbumsComponent } from './Album/listar-albums/listar-albums.component';
import { ListarCommentsComponent } from './Comment/listar-comments/listar-comments.component';
import {AlbumService} from './album.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlbumsComponent,
    ListarCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
