import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlbumsComponent } from './Album/listar-albums/listar-albums.component';
import { ListarCommentsComponent } from './Comment/listar-comments/listar-comments.component';
import {AlbumService} from './album.service';
import {CommentService} from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlbumsComponent,
    ListarCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlbumService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
