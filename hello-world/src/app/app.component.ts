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
  public descricaoContraste = "Ativar Contraste";
  public descricaoAumento = "Ativar Aumento de Texto";
  public descricaoReducao = "Ativar Redução de Texto";
  public opened = false;
  public ativarContraste = false;
  public ativarAumento = false;
  public ativarReducao = false;

  textoContraste(){
    if(this.ativarContraste){
      this.descricaoContraste = "Desativar Contraste";
    }
    else{
      this.descricaoContraste = "Ativar Contraste";
    }
  }

  textoAumento(){
    if(this.ativarAumento){
      this.descricaoAumento = "Desativar Aumento de Texto";
    }
    else{
      this.descricaoAumento = "Ativar Aumento de Texto";
    }
  }

  textoReducao(){
    if(this.ativarReducao){
      this.descricaoReducao = "Desativar Redução de Texto";
    }
    else{
      this.descricaoReducao = "Ativar Redução de Texto";
    }
  }


}
