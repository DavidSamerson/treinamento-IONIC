import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-c-alunos',
  templateUrl: 'c-alunos.html',
})
export class CAlunos {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CAlunos');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns!',
      subTitle: 'Aluno cadastrado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
