import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog } from '@angular/material';
import { FilmesDetalheComponent } from '../filmes-detalhe/filmes-detalhe.component';
@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit, OnChanges {

  public objeto = {};
  public config = {};
  public isLoaded = false;
  public tamanhoOriginal;
  @Input('generoEscolhido') public generoEscolhido;
  @Input('filmeBuscado') public filmeBuscado;
  @Input('modoAltoContraste') public modoAltoContraste;
  @Input('modoAumentarFonte') public modoAumentarFonte;
  @Input('modoDiminuirFonte') public modoDiminuirFonte;  
  constructor(private _moviesService: MoviesService, public dialog: MatDialog) { }

  ngOnInit() {
    this._moviesService.getConfig().subscribe(response=>{
      this.config = response;
      this._moviesService.getRecentMovies()
        .subscribe(data=>{
        this.objeto = data;
        this.isLoaded = true;
      });
    });
    
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.generoEscolhido){
      if(this.generoEscolhido !== ""){
      this._moviesService.getGenreMovies(this.generoEscolhido)
        .subscribe(data=>{
          this.objeto = data;
          this.isLoaded = true;
        });
      }
    }

    if(changes.filmeBuscado){
      if(this.filmeBuscado !== ""){
        this._moviesService.getDesiredMovie(this.filmeBuscado)
          .subscribe(data=> {
            this.objeto = data;
            this.isLoaded = true;
          })
      }
    }
  }


  openDialog(_filme){
    let classes = '';
    if(this.modoAltoContraste)
      classes = 'altoContraste';
    this.dialog.open(FilmesDetalheComponent, {
      width: '60%',
      data:{filme:_filme, altoContraste:this.modoAltoContraste, aumentarFonte:this.modoAumentarFonte, diminuirFonte:this.modoDiminuirFonte},
      panelClass: classes
    });

  }
}
