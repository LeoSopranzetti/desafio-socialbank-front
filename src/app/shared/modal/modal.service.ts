import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private http: HttpClient, private modalService: BsModalService) {}

  bsModalRef!: BsModalRef;

  alertDanger(mensagem: string) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = mensagem;
    this.bsModalRef.content.btnType = 'danger';
  }

  alertSuccess(mensagem: string) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = mensagem;
    this.bsModalRef.content.btnType = 'success';
  }

  alertInfo(mensagem: string) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = 'info';
    this.bsModalRef.content.message = mensagem;
    this.bsModalRef.content.btnType = 'info';
  }
}
