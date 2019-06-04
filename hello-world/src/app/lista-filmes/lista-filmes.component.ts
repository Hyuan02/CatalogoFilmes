import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit, OnChanges {

  public objeto = {};
  public config = {};
  public isLoaded = false;
  @Input() public generoEscolhido;  
  constructor(private _moviesService: MoviesService) { }

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

}
