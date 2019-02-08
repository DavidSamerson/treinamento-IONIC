import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { Cadastro } from './../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  entrar() : void {
    
      this.navCtrl.setRoot(TabsPage);
  }

  cadastro() : void  {
    this.navCtrl.push(Cadastro);
  }

}
