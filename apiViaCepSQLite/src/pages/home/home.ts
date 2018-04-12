import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { PcepProvider } from './../../providers/pcep/pcep';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  model : Cep;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toast: ToastController, 
              private cepProvider: PcepProvider) {

                this.model = new Cep();

  }

  pesquiseCep() {

    this.cepProvider.getCPF(this.model.cep)
      .then((result: any) => {
        if(result.erro!=true){
          this.toast.create({ message: 'Sucesso ao pesquisar pelo CEP:  ' + 
          result.logradouro + ', ' +
          result.bairro + ', ' +
          result.localidade + '-' +
          result.uf,
          position: 'botton', duration: 30000000 }).present();
          this.navCtrl.push('CepPage', {objetoCep : result});
        }
        else{
          this.toast.create({ message: 'CEP inexistente no mundo, verifique por favor! ', position: 'botton', duration: 3000 }).present();
        }
        //this.navCtrl.push('CepPage', result);
      })
      .catch((erro: any) => {
        this.toast.create({ message: 'Erro ao pesquisar pelo cep, verifique por favor!. Erro: ' + erro.erro, position: 'botton', duration: 3000 }).present();
      });

     
  }

}

export class Cep {

  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;

}
