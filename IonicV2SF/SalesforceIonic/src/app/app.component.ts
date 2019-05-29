import { Page2 } from './../../../../antigo/src/pages/page2/page2';
import { Accountlist } from './../../../../antigo/src/pages/account/account-page';
import { Page1 } from './../../../../antigo/src/pages/page1/page1';
import { DataService, OAuth } from 'forcejs';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Welcome', component: Page1 },
      { title: 'Account', component: Accountlist },
      { title: 'Contacts', component: Page2 }
    ];

  }

  initializeApp() {
    // Adding Salesforce Authentication Code
    let oauth = OAuth.createInstance();
      oauth.login()
      .then(oauthResult => {
          DataService.createInstance(oauthResult);
      });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

