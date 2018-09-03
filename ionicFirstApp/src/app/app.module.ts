import { ContatoPage } from './../pages/contato/contato';
import { HomePage } from './../pages/home/home';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BackgroundGreenDirective } from '../directives/background-green/background-green-directive';
import { CapitalizePipe } from '../pipes/capitalize/capitalize';
import { InfoPage } from '../pages/info/info';
import { InicioPage } from '../pages/inicio/inicio';
import { MapaPage } from '../pages/mapa/mapa';
import { MyTabsPage } from '../pages/my-tabs/my-tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BackgroundGreenDirective,
    CapitalizePipe,
    ContatoPage,
    InfoPage,
    InicioPage,
    MapaPage,
    MyTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    preloadModules: true
  }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    StatusBar,
    SplashScreen,
    ContatoPage,
    InfoPage,
    InicioPage,
    MapaPage,
    MyTabsPage
  ]
})
export class AppModule {}
