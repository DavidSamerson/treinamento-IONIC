import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {

  resultado: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public result : any) {
    this.resultado = result;
  }

}
