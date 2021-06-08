import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../novo-user/user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EditarUserService {
  constructor(private http: HttpClient) {}

  /*Faz um request PUT para a API back-end utilizando o id passado como parâmetro */
  edit(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${API}/user/update/${id}`, user);
  }
}
