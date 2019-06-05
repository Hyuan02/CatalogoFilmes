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
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatButtonModule, MatInputModule, MatDialogModule} from '@angular/material';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    ListagenerosComponent,
    BuscaFilmeComponent,
    FilmesDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [GenresService, MoviesService],
  bootstrap: [AppComponent],
  entryComponents: [FilmesDetalheComponent]

  
  
})
export class AppModule { }
