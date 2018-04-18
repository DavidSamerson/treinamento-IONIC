import { RequestOptions } from '@angular/http';
import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modelLogin : Usuario;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    private loginProvider: LoginProvider) {

      this.modelLogin = new Usuario();
      this.modelLogin.email = 'wbatista@moldsoft.com.br.devry.testes';
      this.modelLogin.senha = 'w89018423rQDsBmsZsBOeCaDqkm4evap6';
  }

  efetuarLogin() {
    this.loginProvider.login2 (this.modelLogin.email, this.modelLogin.senha)
    .then((result: any) => {
      
      this.toast.create({ message: 'Usuário logado com sucesso. teste2: ' + result.toString() +  result.data['id'] 
      + result.json() , position: 'botton', duration: 3000 }).present();
    
    })
    .catch((error: any) => {

      this.toast.create({ message: 'Erro ao efetuar login. Erro do tipo Teste: ' + error.error, position: 'botton', duration: 3000 }).present();
    
    });
  }
}
 export class Usuario {
   email: string;
   senha: string;
 }