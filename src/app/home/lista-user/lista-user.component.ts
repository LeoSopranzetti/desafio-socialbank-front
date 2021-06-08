import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ListaUserService } from './lista-user.service';

import { Component, OnInit } from '@angular/core';
import { Users } from '../novo-user/user';

import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

import { FormControl } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css'],
})
export class ListaUserComponent implements OnInit {
  acoesInput = new FormControl();

  /*Observable responsável por verificar se existe um usuário logado */
  userAuth$ = this.authService.retornaUserAuth();

  /* Observale responsável por verificar se teve uma mudança de valores em um input do template,
  caso tenham mudanças faz um request GET para a API buscando usuários de nome iguais aos valores do input */
  listUsersByType$ = this.acoesInput.valueChanges.pipe(
    switchMap((valorDigitado) =>
      this.novoService.listUsersByType(valorDigitado)
    )
  );

  users!: Users;

  value!: string;

  page: number = 0;

  pageReativo!: any;

  sizeReativo!: any;

  constructor(
    private novoService: ListaUserService,
    private authService: AutenticacaoService,
    private modalService: ModalService,
    private router: Router
  ) {}

  /* Lista de usuários carregadas por meio de uma request GET utilizando o service,
  reposta do request vem em formato Page do Spring boot */
  ngOnInit(): void {
    this.novoService
      .listByPage(this.pageReativo, this.sizeReativo)
      .subscribe((reposta) => {
        this.users = reposta.content;
        this.page = reposta;
      });
  }

  /* Método acionado ao mudar de página no template carregando a nova página da API */
  changePage(event: any) {
    this.pageReativo = event.page;
    this.sizeReativo = event.size;

    this.novoService
      .listByPage(this.pageReativo, this.sizeReativo)
      .subscribe((reposta) => {
        this.users = reposta.content;
      });
  }

  /* Método que verifica se existe um usuário logado e caso tenha redireciona
  para a rota de detalhes passando o ID como parâmetro na URL */
  toDetails(id: number) {
    if (this.authService.estaLogado()) {
      this.router.navigate(['home', 'detalhes', id]);
    } else {
      this.modalService.alertInfo('Faça o login para visualizar os detalhes.');
    }
  }
}
