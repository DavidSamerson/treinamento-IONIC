import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  options : InAppBrowserOptions = {
    location : 'yes',
    hidden : 'no',
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'no',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Fechar', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'no', //iOS only
    enableViewportScale : 'no', //iOS only
    hideurlbar:'yes',
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
};

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  chamarComunidade() {

    const browser = this.iab.create('https://sindicoonline.my.salesforce.com/', "_self", this.options);

  }

}
