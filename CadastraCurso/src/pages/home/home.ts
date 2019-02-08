import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert() {
    
    let alert = this.alertCtrl.create({
      title: 'Opa!',
      subTitle: 'No momento este curso encontra-se indisponível, volte mais tarde!',
      buttons: ['OK']
    });
    alert.present();
  }

}
