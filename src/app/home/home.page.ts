import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private jokesService: JokesService) {}

  piada: any;
  url= 'http://www.mundogump.com.br/wp-content/uploads/2009/08/risada.jpg';
  partePiada: string;
  piadas: any[];
  piadasPesquisadas: any[];

  ngOnInit() {
    // this.showJoke();
    this.jokesService.getAllJokes().subscribe(piadas => {
      this.piadas = piadas;
    });
  }

  showJoke(){
    this.jokesService.getAllJokes().subscribe(piadas => {
      this.piada = piadas[this.indexAleatorio(piadas)];
      this.piadas = piadas;
    },erro => {
      console.log(erro);
    },() => {
      console.log('sucesso!');
    });
  }

  indexAleatorio(piadas) {
    const index = Math.floor(Math.random() * piadas.length + 1);
    return index;
  }

  pesquisarPiada(){
    
    this.piadasPesquisadas = this.piadas.filter((piada) => {
      if(piada.pergunta.toLowerCase().match(this.partePiada.toLowerCase())){
        return piada;
      }
      else if(piada.resposta.toLowerCase().match(this.partePiada.toLowerCase())){
        return piada;
      }
    })
  }

  prepareDetail(piada: any) {
    this.jokesService.piadaSelecionada = piada;
  }

}
