import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { UserAuth } from './user-auth';
import { Login } from '../home/login/login';

const KEY = 'token';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  /*Subject que vai receber dados do usuário logado e vai ser transformado em observable. */
  private userAuthSubject = new BehaviorSubject<UserAuth>({});

  constructor(private http: HttpClient) {
    if (this.possuiToken()) {
      this.decodificaJWT();
    }
  }

  /*Método que faz uma request POST passando o Login como parâmetro no body,
  retorna um token válido da API back-end,
  token recebido é salvo na Session Storage para ser utilizado. */
  logar(login: Login): Observable<any> {
    return this.http.post(`${API}/auth`, login).pipe(
      tap((receivedData: any) => {
        const authToken = receivedData.token;
        this.saveToken(authToken);
      })
    );
  }

  /* Decodifica o usuário do JWT e coloca no userAuthSubject para monitorar
  quando existe um usuário logado no sistema */
  private decodificaJWT() {
    const token = this.retornaToken();
    const userAuth = jwt_decode(token) as UserAuth;
    this.userAuthSubject.next(userAuth);
  }

  /*Transforma o subject em observable. */
  retornaUserAuth() {
    return this.userAuthSubject.asObservable();
  }

  /*Abaixo métodos comuns para o manuseio do token. */

  retornaToken() {
    return sessionStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    sessionStorage.setItem(KEY, token);
  }

  excluiToken() {
    sessionStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornaToken();
  }

  saveToken(token: string) {
    this.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.excluiToken();
    this.userAuthSubject.next({});
  }

  estaLogado() {
    return this.possuiToken();
  }
}
