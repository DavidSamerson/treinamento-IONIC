import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class Cadastro {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cadastro');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Seja Bem Vindo!',
      subTitle: 'Seu cadastro foi realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
