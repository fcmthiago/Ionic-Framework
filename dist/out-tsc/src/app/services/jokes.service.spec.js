import { TestBed } from '@angular/core/testing';
import { JokesService } from './jokes.service';
describe('JokesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(JokesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=jokes.service.spec.js.map