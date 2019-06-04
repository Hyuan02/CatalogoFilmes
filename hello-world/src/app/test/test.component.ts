import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

@NgModule({
  imports:[
    FormsModule
  ]
})
export class TestComponent implements OnInit {

  public name = "Teste conteudo dinamico";
  public filme = "";
  public values = '';
  
  constructor() { }

  ngOnInit() {
  }

  onClick(filmeBuscado) {
    this.filme = filmeBuscado;
    console.log(this.filme);
  }

}
