import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit{

  @ViewChild(Nav) nav : Nav;
  pages: [{title: string, component: any}];
  rootPage:any = HomePage;

  constructor(
     platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
    public menuCtrl: MenuController) {

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Sobre', component: SobrePage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit(){
this.menuCtrl.open('menu1');
  }

  openPage(page: {title: string, component: any}) : void {
    this.nav.setRoot (page.component);
    // this.rootPage = page.component;
  }
}

