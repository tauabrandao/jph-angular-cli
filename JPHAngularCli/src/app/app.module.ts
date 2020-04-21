import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlbumsComponent } from './Album/listar-albums/listar-albums.component';
import { ListarCommentsComponent } from './Comment/listar-comments/listar-comments.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
