import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-listageneros',
  templateUrl: './listageneros.component.html',
  styleUrls: ['./listageneros.component.css']
})
export class ListagenerosComponent implements OnInit {

  constructor(private _genresService: GenresService) { }

  ngOnInit() {
    this._genresService.getGenres()
      .subscribe(data => {
        this.objeto = data;
        this.isLoaded = true;
        console.log(this.isLoaded);
        console.log(this.objeto);
      });
      }
    
    public objeto = {};
    public isLoaded = false;
  }


