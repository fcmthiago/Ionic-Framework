import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var JokesService = /** @class */ (function () {
    function JokesService(http) {
        this.http = http;
        this.url = '/assets/trocadilhos.json';
    }
    JokesService.prototype.getAllJokes = function () {
        return this.http.get(this.url);
    };
    JokesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], JokesService);
    return JokesService;
}());
export { JokesService };
//# sourceMappingURL=jokes.service.js.map