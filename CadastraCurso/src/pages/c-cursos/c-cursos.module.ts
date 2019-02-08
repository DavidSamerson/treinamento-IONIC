import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CCursos } from './c-cursos';

@NgModule({
  declarations: [
    CCursos,
  ],
  imports: [
    IonicPageModule.forChild(CCursos),
  ],
})
export class CCursosModule {}
