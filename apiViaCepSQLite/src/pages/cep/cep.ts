import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Cep } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {

  resultado: Cep;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.resultado = navParams.get("objetoCep");
    
  }

}
