import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CAlunos } from './c-alunos';

@NgModule({
  declarations: [
    CAlunos,
  ],
  imports: [
    IonicPageModule.forChild(CAlunos),
  ],
})
export class CAlunosModule {}
