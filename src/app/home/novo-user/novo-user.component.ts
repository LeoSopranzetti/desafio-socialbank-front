import { Adress } from './adress';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NovoUserService } from './novo-user.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-novo-user',
  templateUrl: './novo-user.component.html',
  styleUrls: ['./novo-user.component.css'],
})
export class NovoUserComponent implements OnInit {
  thumb: string =
    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png';

  adress: Adress = {} as Adress;
  user: User = { thumb: this.thumb, adress: this.adress } as User;

  constructor(
    private novoUserService: NovoUserService,
    private router: Router,
    private modalService: ModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  /*Método que faz um request POST utilizando o service passando o objeto usuário que veio do template */
  save() {
    this.novoUserService.save(this.user).subscribe(
      () => {
        this.router.navigate(['']);
        this.toastr.success('Usuário criado com sucesso.', '');
      },
      (erro) => {
        console.log(erro);
        this.modalService.alertDanger('Não foi possível criar o usuário.');
      }
    );
  }
}
