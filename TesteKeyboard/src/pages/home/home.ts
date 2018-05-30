import {Component, Input, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //PASSO 1 ------------------------------
  //declarar uma ViewChild com o nome Input
  @ViewChild('input') myInput ;

  constructor(public navCtrl: NavController) {

  }

  ionViewLoaded() {
      this.myInput.setFocus();
 }

 clickk(){
    this.myInput.setFocus();
 }

}
