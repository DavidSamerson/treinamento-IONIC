import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  template: '<p> Carregando... </p>'
})
export class HomePage {

  platform : any;
  url: string = 'https://web.whatsapp.com/';

  constructor(public navCtrl: NavController, 
    platform : Platform, 
    private iab: InAppBrowser) {
    this.platform = platform;
  }

  ionViewWillEnter() {
    
    const option: InAppBrowserOptions = {
      location : 'yes',
      zoom : 'no',
      hardwareback : 'no',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      fullscreen : 'yes',
      disallowoverscroll : 'no',

    }

    this.platform.ready()
      .then(()=>{
        const browser = this.iab.create(this.url, "_blank", option);
              browser.show();
      });
  }

}
