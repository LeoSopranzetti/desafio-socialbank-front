import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { CadastroAuthService } from './cadastro-auth.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-cadastro-auth',
  templateUrl: './cadastro-auth.component.html',
  styleUrls: ['./cadastro-auth.component.css'],
})
export class CadastroAuthComponent implements OnInit {
  email!: string;
  senha!: string;

  /*Objeto que vai receber os valores inseridos nos inputs do template Cadastro*/
  newAuth: Login = {
    email: this.email,
    senha: this.senha,
  };

  constructor(
    private router: Router,
    private modalService: ModalService,
    private cadastroService: CadastroAuthService
  ) {}

  ngOnInit(): void {}

  /*Metodo chamado pelo botão no template Cadastro,
  cadastra um usuário na API back-end utilizando o CadastroAuthService*/
  cadastrar() {
    this.cadastroService.cadastro(this.newAuth).subscribe(
      () => {
        this.router.navigate(['']);
        this.modalService.alertSuccess('Cadastro efetuado com sucesso.');
      },
      (erro) => {
        console.log(erro);
        this.modalService.alertDanger('Email já cadastrado.');
      }
    );
  }
}
