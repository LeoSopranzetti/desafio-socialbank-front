import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CadastroAuthService } from './cadastro-auth.service';

describe('CadastroAuthService', () => {
  let service: CadastroAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CadastroAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
