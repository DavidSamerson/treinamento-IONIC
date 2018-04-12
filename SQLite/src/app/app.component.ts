import { DatabaseProvider } from './../providers/database/database';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any = null;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              dbProvider : DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //método necessário para carregar o banco de dados antes da aplicação entrar.

      dbProvider.createDatabase()
        .then(() => {
          this.openHomePage(splashScreen);
        })
        .catch(() => {
          this.openHomePage(splashScreen);
          //telas de erro
        })

    });
  }

  private openHomePage( splashScreen : SplashScreen ) {
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}
