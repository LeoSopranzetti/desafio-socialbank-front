import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SharedComponent,
    FooterComponent,
    MensagemComponent,
    ModalComponent,
    NavComponent,
  ],
  exports: [
    SharedComponent,
    FooterComponent,
    MensagemComponent,
    ModalComponent,
    NavComponent,
  ],
})
export class SharedModule {}
