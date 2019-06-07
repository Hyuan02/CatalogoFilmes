import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catalogo de Filmes';
  public numeroGenero = "";
  public filmeBuscado = "";
  public opened = false;
  public ativarContraste = false;
  public ativarAumento = false;
  public ativarReducao = false;
}
