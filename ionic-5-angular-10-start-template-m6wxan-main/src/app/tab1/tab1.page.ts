import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  ingresso() {
    this.abrirUrl(
      'https://www.vilabelmiro.net/estadio-vila-belmiro-ingressos/'
    );
  }

  lojaOficial() {
    this.abrirUrl('https://www.santosstore.com.br');
  }
}
