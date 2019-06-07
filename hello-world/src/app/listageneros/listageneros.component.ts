import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { GenresService } from '../genres.service';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-listageneros',
  templateUrl: './listageneros.component.html',
  styleUrls: ['./listageneros.component.css']
})
export class ListagenerosComponent implements OnInit {

  constructor(private _moviesService: MoviesService) { }
  @Input('modoAumentarFonte') public modoAumentarFonte; 
  @Input('modoDiminuirFonte') public modoDiminuirFonte;

  ngOnInit() {
    this._moviesService.getGenres()
      .subscribe(data => {
        this.objeto = data;
        this.isLoaded = true;
        console.log(this.isLoaded);
        console.log(this.objeto);
      });
      }
    
    public objeto = {};
    public isLoaded = false;

    @Output() public selecionarGenero = new EventEmitter();

    obterFilmesGenero(id_genero) {
      console.log(id_genero);
      this.selecionarGenero.emit(id_genero);
    }

    

    
  }


