import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  users: any[];
  page: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toast: ToastController, private userProvider: UserProvider) {
  }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
  }

  getAllUsers(page: number) {

    this.userProvider.getAll(page)
      .then((result: any) => {

        //popular a variáveml com um for
        
        for(var i = 0; i < result.data.lenght; i++){
          var user = result.data[i];
          this.users.push(user);
        }

      })
      .catch((error: any) => {
        this.toast.create({message: 'Erro ao listar os usuários. Tipo de erro:'
        + error.error, position: 'bottom', duration: 3000}).present();
      
      });
  }

  getUser(){
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }

  openUser(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserDetailPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao abrir o usuário:'
        + error.error, position: 'bottom', duration: 3000 }).present();
      });
  }

  openCreateUser() {
    this.navCtrl.push('UserEditPage');
  }

  //editar o usuário chamando a mesma página de criação e jogando um objeto praq ele.
  openEditUser(id: number){

    this.userProvider.get(id)
    .then((result: any) => {

      this.navCtrl.push('UserEditPage', { user: result.data });

    })
    .catch((error: any) => {

      this.toast.create({
        message: 'Erro ao editar o usuário. Token:'
                        + error.error, position: 'bottom', duration: 3000}).present();
      });

  }

  deleteUser(user: any){

    this.userProvider.remove(user.id)
    .then((result: any) => {

      let index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.toast.create({
        message: 'Usuário deletado com sucesso.', position: 'bottom', duration: 3000}).present();

    })
    .catch((error: any) => {

      this.toast.create({
        message: 'Erro ao aqpagar o usuário. Erro:'
                  + error.error, position: 'bottom', duration: 3000}).present();
      });

  }

}
