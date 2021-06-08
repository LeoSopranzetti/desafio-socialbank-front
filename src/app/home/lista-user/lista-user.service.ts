import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Users } from '../novo-user/user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ListaUserService {
  constructor(private http: HttpClient) {}

  /*Método que faz um request GET passando o número da página e o tamanho da página como parâmetros
  e recebe uma response com a lista de usuários */
  listByPage(page: any, size: any): Observable<any> {
    return this.http.get(
      `${API}/user/listar?page=${page}&size=${size}&sort=id,desc`
    );
  }

  /*Método qur faz um request GET passando uma string como parâmetro
  e retorna uma lista de usuários que contenham essa string no nome */
  listUsersByType(value: string): Observable<Users> {
    return this.http.get<Users>(`${API}/user/listar/${value}`);
  }
}
