import { User } from '../novo-user/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class DetalhesDeleteService {
  constructor(private http: HttpClient, private modalService: BsModalService) {}

  bsModalRef!: BsModalRef;

  /*Método que faz um request GET para a API passando o id como parâmetro na URL e retorna um usuário. */
  buscaPorId(id?: number): Observable<User> {
    return this.http.get<User>(`${API}/user/find/${id}`);
  }

  /*Método que faz um request DELETE para a API passando o id como parâmetro na URL. */
  delete(id?: number): Observable<User> {
    return this.http.delete<User>(`${API}/user/delete/${id}`);
  }

  /*Métodos de alerta do modal */
  alertError() {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao deletar usuário!';
    this.bsModalRef.content.btnType = 'danger';
  }

  alertSuccess() {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'Usuário deletado com sucesso!';
    this.bsModalRef.content.btnType = 'success';
  }
}
