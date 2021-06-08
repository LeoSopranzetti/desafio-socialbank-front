import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  senha!: string;

  userAuth: Login = {
    email: this.email,
    senha: this.senha,
  };

  constructor(
    private AutenticacaoService: AutenticacaoService,
    private router: Router,
    private modalService: ModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  /*Método de autenticação por uma request POST passando o objeto vindo do template no body*/
  logar() {
    this.AutenticacaoService.logar(this.userAuth).subscribe(
      () => {
        this.router.navigate(['']);
        this.toastr.success('Login efetuado com sucesso.', '');
      },
      (erro) => {
        console.log(erro);
        this.modalService.alertDanger('Dados inválidos.');
      }
    );
  }

  toCadastro() {
    this.router.navigate(['home', 'cadastro']);
  }
}
