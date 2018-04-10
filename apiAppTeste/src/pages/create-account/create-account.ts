//import de Providers do sistema.
import { UserProvider } from './../../providers/user/user';

//import de componentes do sistema
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  //criando uma classe Modelo de Usuários
  model: User;

  constructor(  public navCtrl: NavController, public navParams: NavParams,
                private toast: ToastController, private userProvider: UserProvider  ) {

                    this.model = new User(); //Fazendo a instância da classe
                    this.model.email = 'peter@klaven'; //Setando o Email no objeto
                    this.model.password = 'cityslicka'; //Setando a Senha no objeto
  }

  //método que chama o Provider
  createAccount(){

    //acessando o método de criação de conta e passando email e senha via parâmetro.
    //Temos um THEN pra se der certo, e um CATCH pra caso não der certo!
    this.userProvider.createAccount(this.model.email, this.model.password)
    .then((result: any) => {

      //O que é isso?
      /* aparentemente é um método que cria um tipo de resposta via JSON com os parametros especificados! */

      this.toast.create({ message: 'Usuário Criado com sucesso. Token:'
                        + result.token, position: 'bottom', duration: 3000}).present();

                        //--------------------------------------------------
                        //AQUI é onde eu salvo com IONIC Storage ou SQLite!!
                        //--------------------------------------------------

    })
    .catch((error: any) => {

      //Exibe o erro baseado no bjeto JSON de 'Error'
      this.toast.create({ message: 'Error ao criar o usuário: Erro:'
      + error.error, position: 'bottom', duration: 3000}).present();

    });
  }

}

//Setando a classe modelo de usuários.
//Criando aqui
export class User {
  email: string;
  password: string;
}
