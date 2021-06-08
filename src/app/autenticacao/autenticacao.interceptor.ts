import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private authService: AutenticacaoService) {}

  /*Intercepta todas as requests e adiciona o token no Authorization */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.possuiToken()) {
      const token = this.authService.retornaToken();
      const tokenTipo = `Bearer ${token} `;
      const headers = new HttpHeaders().append('Authorization', tokenTipo);
      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
