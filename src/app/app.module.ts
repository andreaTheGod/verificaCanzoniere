import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { 
FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { DettagliAlbumComponent } from './dettagli-album/dettagli-album.component';

@NgModule({
  declarations: [
    AppComponent,
    DettagliAlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
