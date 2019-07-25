import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';
var HomePage = /** @class */ (function () {
    function HomePage(jokesService) {
        this.jokesService = jokesService;
        this.url = 'http://www.mundogump.com.br/wp-content/uploads/2009/08/risada.jpg';
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // this.showJoke();
        this.jokesService.getAllJokes().subscribe(function (piadas) {
            _this.piadas = piadas;
        });
    };
    HomePage.prototype.showJoke = function () {
        var _this = this;
        this.jokesService.getAllJokes().subscribe(function (piadas) {
            _this.piada = piadas[_this.indexAleatorio(piadas)];
            _this.piadas = piadas;
        }, function (erro) {
            console.log(erro);
        }, function () {
            console.log('sucesso!');
        });
    };
    HomePage.prototype.indexAleatorio = function (piadas) {
        var index = Math.floor(Math.random() * piadas.length + 1);
        return index;
    };
    HomePage.prototype.pesquisarPiada = function () {
        var _this = this;
        this.piadasPesquisadas = this.piadas.filter(function (piada) {
            if (piada.pergunta.toLowerCase().match(_this.partePiada.toLowerCase())) {
                return piada;
            }
            else if (piada.resposta.toLowerCase().match(_this.partePiada.toLowerCase())) {
                return piada;
            }
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [JokesService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map