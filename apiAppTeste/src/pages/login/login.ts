import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toast: ToastController, private userProvider: UserProvider) {

                this.model = new User();
                this.model.email = 'sydney@fife';
                this.model.password = 'pistol';
  }

  login(){
    this.userProvider.login(this.model.email, this.model.password)
    .then((result: any) => {

      this.toast.create({ message: 'Usuário Logado com sucesso. Token:'
                        + result.token, position: 'bottom', duration: 3000}).present();
                        //salvar o token para futuras requisições
                        //redirecionar o usuário pra outra tela usando o navCtrl

    })
    .catch((error: any) => {

      this.toast.create({ message: 'Erro ao efetuar o login. Erro:'
                        + error.error, position: 'bottom', duration: 3000}).present();
                        
    });
  }

}

export class User {
  email: string;
  password: string;
}