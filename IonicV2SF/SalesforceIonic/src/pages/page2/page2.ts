import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SfdcService } from '../../providers/sfdc-service/sfdc-service';
import { SfdcData } from '../../providers/sfdc-data/sfdc-data';
import { ContactdetailPage } from '../contactdetail/contactdetail';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {


  contactList: Array<any>;
  loading : any;
  contactRec: any;

  constructor(public navCtrl: NavController,public service: SfdcService,public dataService: SfdcData,public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.contactList = [];
    this.getAllContact();
  }

  getAllContact() {
     this.contactList = this.dataService.getContactData();
     if(this.contactList == undefined || this.contactList.length == 0){
             this.loading = this.loadingCtrl.create({
                content: 'Please wait...getting contacts',
                dismissOnPageChange: true
             }).present();

             this.service.getAllContact().then(data => {
                  this.contactList = data;
                  this.dataService.setContactList(data);
                  this.loading.dismiss();
             }).catch(error => console.log("ERROR" + JSON.stringify(error)));
     }
  }

  itemTapped(event, contact) {

    let loader = this.loadingCtrl.create({
                  content: 'Please wait...getting contacts',
                  dismissOnPageChange: true
    })
    loader.present();

    this.service.getContactById(contact.Id).then(data => {
          delete data.attributes;
          delete data.Account.attributes;
                loader.dismiss();
                this.contactRec = data;
                this.navCtrl.push(ContactdetailPage,this.contactRec);
    }).catch(error => console.log("ERROR" + JSON.stringify(error)));


  }

}

