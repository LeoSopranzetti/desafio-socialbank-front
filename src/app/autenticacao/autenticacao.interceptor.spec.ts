import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AutenticacaoInterceptor } from './autenticacao.interceptor';

describe('AutenticacaoInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AutenticacaoInterceptor],
      imports: [HttpClientTestingModule],
    })
  );

  it('should be created', () => {
    const interceptor: AutenticacaoInterceptor = TestBed.inject(
      AutenticacaoInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
