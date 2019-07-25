import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  constructor(private jokesService: JokesService) { }
  piadaSelecionada: any;

  ngOnInit() {
    // console.log(this.jokesService.piadaSelecionada);
    this.piadaSelecionada  = this.jokesService.piadaSelecionada; 
  }

}
