import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-c-cursos',
  templateUrl: 'c-cursos.html',
})
export class CCursos {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CCursos');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns!',
      subTitle: 'Novo curso acabou de ser cadastrado!',
      buttons: ['OK']
    });
    alert.present();
  }

}
