import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LAlunos } from './l-alunos';

@NgModule({
  declarations: [
    LAlunos,
  ],
  imports: [
    IonicPageModule.forChild(LAlunos),
  ],
})
export class LAlunosModule {}
