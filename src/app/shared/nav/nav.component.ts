import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user$ = this.authService.retornaUserAuth();

  constructor(
    private router: Router,
    private authService: AutenticacaoService,
    private modalService: ModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
    this.toastr.error('Login efetuado com sucesso.', '');
  }

  noUserLogado() {
    this.modalService.alertInfo('Efetue o login para cadastrar usuários.');
  }

  userLogado() {
    this.router.navigate(['home', 'newuser']);
  }
}
