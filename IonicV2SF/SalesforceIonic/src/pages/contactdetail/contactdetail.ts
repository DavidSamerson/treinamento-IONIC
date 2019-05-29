import { ContactEdit } from './../../../../../antigo/src/pages/contactedit/contactedit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ContactdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactdetail',
  templateUrl: 'contactdetail.html',
})
export class ContactdetailPage {

  contact : any;

  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.contact = this.navParams.data;
  }

  editContact(event){
    this.navCtrl.push(ContactEdit,this.contact);
  }

}
