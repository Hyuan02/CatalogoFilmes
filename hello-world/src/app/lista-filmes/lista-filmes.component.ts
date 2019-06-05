import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit, OnChanges {

  public objeto = {};
  public config = {};
  public isLoaded = false;
  @Input('generoEscolhido') public generoEscolhido;
  @Input('filmeBuscado') public filmeBuscado;  
  constructor(private _moviesService: MoviesService, public dialog: MatDialog) { }

  ngOnInit() {
    this._moviesService.getConfig().subscribe(response=>{
      this.config = response;
      this._moviesService.getRecentMovies()
        .subscribe(data=>{
        this.objeto = data;
        this.isLoaded = true;
        console.log(this.config);
        console.log(this.objeto);
        console.log(this.isLoaded);
      });
    });
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if(changes.generoEscolhido){
      if(this.generoEscolhido !== ""){
        console.log("Mudou genero" + this.generoEscolhido);
      this._moviesService.getGenreMovies(this.generoEscolhido)
        .subscribe(data=>{
          this.objeto = data;
          this.isLoaded = true;
          console.log(this.objeto);
        });
      }
    }

    if(changes.filmeBuscado){
      if(this.filmeBuscado !== ""){
        console.log("A buscar filme" + this.filmeBuscado);
        this._moviesService.getDesiredMovie(this.filmeBuscado)
          .subscribe(data=> {
            this.objeto = data;
            this.isLoaded = true;
            console.log(this.objeto);
          })
      }
    }
  }


  openDialog(filme){
    console.log(filme);
  }
}
