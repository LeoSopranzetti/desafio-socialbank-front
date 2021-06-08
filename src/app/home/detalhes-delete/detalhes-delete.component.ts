import { Adress } from './../novo-user/adress';
import { ToastrService } from 'ngx-toastr';
import { DetalhesDeleteService } from './detalhes-delete.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../novo-user/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes-delete.component.html',
  styleUrls: ['./detalhes-delete.component.css'],
})
export class DetalhesDeleteComponent implements OnInit {
  /*Id passado como parâmetro pela URL*/
  userId = this.activatedRoute.snapshot.params.userId;

  adress: Adress = {} as Adress;
  user: User = { adress: this.adress } as User;

  modalRef!: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private detalhesService: DetalhesDeleteService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  /*Faz um request GET para API back-end utilizando o service e passando o ID que veio como parâmetro pela URL,
  em caso de sucesso atribui a resposta no objeto User que não tinha sido inicializado ainda.*/
  ngOnInit(): void {
    this.detalhesService.buscaPorId(this.userId).subscribe((reposta) => {
      this.user = reposta;
    });
  }

  /*Método que é chamado pelo botão da template,
  faz um request DELETE para API back-end utilizando o service e passando o ID que veio como parâmetro pela URL*/
  delete() {
    this.detalhesService.delete(this.userId).subscribe(
      () => {
        this.router.navigate(['']);
        this.toastr.success('Usuário deletado com sucesso.', '');
      },
      () => {
        this.detalhesService.alertError();
      }
    );
  }

  /* Método que redireciona para a rota de editar usuário passando o ID como parâmetro na URL,
  é chamado pelo botão no template */
  toEdit() {
    this.router.navigate(['home', 'editar', this.userId]);
  }

  /*Os métodos abaixos são relacionados ao modal criado para o delete */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.delete();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
