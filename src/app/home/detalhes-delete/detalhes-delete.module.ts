import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DetalhesDeleteComponent } from './detalhes-delete.component';

@NgModule({
  declarations: [DetalhesDeleteComponent],
  imports: [CommonModule, RouterModule],
  exports: [DetalhesDeleteComponent],
})
export class DetalhesDeleteModule {}
