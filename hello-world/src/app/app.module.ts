import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { GenresService } from './genres.service';
import { ListagenerosComponent } from './listageneros/listageneros.component';
import { MoviesService } from './movies.service';
import { BuscaFilmeComponent } from './busca-filme/busca-filme.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    ListagenerosComponent,
    BuscaFilmeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GenresService, MoviesService],
  bootstrap: [AppComponent],

  
  
})
export class AppModule { }
