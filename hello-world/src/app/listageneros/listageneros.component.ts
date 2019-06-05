import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GenresService } from '../genres.service';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-listageneros',
  templateUrl: './listageneros.component.html',
  styleUrls: ['./listageneros.component.css']
})
export class ListagenerosComponent implements OnInit {

  constructor(private _moviesService: MoviesService) { }

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


