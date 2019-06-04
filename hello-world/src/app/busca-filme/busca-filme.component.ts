import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']
})
export class BuscaFilmeComponent implements OnInit {

  public palavraFilme = "";

  constructor() { }

  ngOnInit() {
  }

  @Output() public buscadorFilme = new EventEmitter();

  buscarFilme(){
    console.log(this.buscadorFilme);
    this.buscadorFilme.emit(this.palavraFilme);
  }
}
