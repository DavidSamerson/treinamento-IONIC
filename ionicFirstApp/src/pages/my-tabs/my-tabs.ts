import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MyTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tabs',
  templateUrl: 'my-tabs.html'
})
export class MyTabsPage {

  inicioRoot = 'InicioPage'
  infoRoot = 'InfoPage'
  mapaRoot = 'MapaPage'
  contatoRoot = 'ContatoPage'


  constructor(public navCtrl: NavController) {}

}
