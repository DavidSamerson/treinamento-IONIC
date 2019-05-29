import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-accountdetail',
  templateUrl: 'accountdetail.html',
})
export class AccountdetailPage {

    account : any;

    constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController) {
      this.account = this.navParams.data;
    }

}
