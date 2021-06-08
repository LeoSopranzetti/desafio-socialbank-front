import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NovoUserComponent } from './novo-user/novo-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaUserComponent } from './lista-user/lista-user.component';
import { EditarUserComponent } from './editar-user/editar-user.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxMaskModule } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { CadastroAuthComponent } from './cadastro-auth/cadastro-auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    NovoUserComponent,
    ListaUserComponent,
    EditarUserComponent,
    PaginationComponent,
    LoginComponent,
    CadastroAuthComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    ModalModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
