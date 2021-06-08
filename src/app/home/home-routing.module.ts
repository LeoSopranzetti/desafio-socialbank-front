import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUserComponent } from './novo-user/novo-user.component';
import { ListaUserComponent } from './lista-user/lista-user.component';

import { EditarUserComponent } from './editar-user/editar-user.component';
import { LoginComponent } from './login/login.component';
import { CadastroAuthComponent } from './cadastro-auth/cadastro-auth.component';
import { DetalhesDeleteComponent } from './detalhes-delete/detalhes-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'newuser', component: NovoUserComponent },
      { path: '', component: ListaUserComponent },
      { path: 'detalhes/:userId', component: DetalhesDeleteComponent },
      { path: 'editar/:userId', component: EditarUserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroAuthComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
