import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { WebIntent } from '@ionic-native/web-intent';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: any ;

  constructor(
    public navCtrl: NavController,
    private dom : DomSanitizer,
    public loadingCtrl: LoadingController) {

      this.url = this.dom.bypassSecurityTrustResourceUrl("https://portalsindicoonline.force.com/alphaville/login");
  }



  // ionViewWillEnter() {
  //   this.url1 = "https://portalsindicoonline.force.com/alphaville/login";
  //   console.log(this.url1); //works
  // }

  transform() {
    return this.dom.bypassSecurityTrustResourceUrl("https://portalsindicoonline.force.com/alphaville/login");
    // const options = {
    //   action: this.webIntent.ACTION_VIEW,
    //   url: 'https://portalsindicoonline.force.com/alphaville/login',
    //   type: 'application/vnd.android.package-archive'
    // };
    // return this.dom.bypassSecurityTrustResourceUrl("https://portalsindicoonline.force.com/alphaville/login");
  }

}
