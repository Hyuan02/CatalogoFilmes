import { Component, OnInit, Inject, Host, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../dialogData';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-filmes-detalhe',
  templateUrl: './filmes-detalhe.component.html',
  styleUrls: ['./filmes-detalhe.component.css']
})
export class FilmesDetalheComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private _moviesService: MoviesService) { }

  public config;
  public loaded = false;
  public tamanhoOriginal;
  public modoAumentarFonte = this.data.aumentarFonte;
  public modoDiminuirFonte = this.data.diminuirFonte;

  ngOnInit() {
    
    this._moviesService.getConfig().subscribe(response =>{
      this.config = response;
      this.loaded = true;
    });
  }

}
