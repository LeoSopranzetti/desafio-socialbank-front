import { Adress } from './../novo-user/adress';
import { EditarUserService } from './editar-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../novo-user/user';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { DetalhesDeleteService } from '../detalhes-delete/detalhes-delete.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css'],
})
export class EditarUserComponent implements OnInit {
  /*Id passado como parâmetro pela URL*/
  userId = this.activatedRoute.snapshot.params.userId;

  adress: Adress = {} as Adress;
  user: User = { adress: this.adress } as User;

  bsModalRef!: BsModalRef;

  constructor(
    private detalhesServie: DetalhesDeleteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private editarUserService: EditarUserService,
    private modalService: ModalService,
    private toastr: ToastrService
  ) {}

  /*Faz um request GET para API back-end utilizando o service e passando o ID que veio como parâmetro pela URL,
  em caso de sucesso atribui a resposta no objeto User que não tinha sido inicializado ainda.*/
  ngOnInit(): void {
    this.detalhesServie.buscaPorId(this.userId).subscribe((reposta) => {
      this.user = reposta;
    });
  }

  /*Faz um request PUT para API back-end utilizando o service e passando o ID que veio como parâmetro pela URL */
  editar() {
    this.editarUserService.edit(this.userId, this.user).subscribe(
      () => {
        this.router.navigate(['']);
        this.toastr.success('Usuário editado com sucesso.', '');
      },
      () => {
        this.modalService.alertDanger('Não foi possível editar o usuário.');
      }
    );
  }
}
