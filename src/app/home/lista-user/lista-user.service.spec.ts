import { NovoUserService } from './../novo-user/novo-user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('ListaUserService', () => {
  let service: NovoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NovoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
