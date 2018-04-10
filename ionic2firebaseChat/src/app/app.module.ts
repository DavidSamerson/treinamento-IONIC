import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from './../providers/user/user';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyD8Si3uwafSLnTdf8Wv_aF1Nxk5Z91aLek",
  authDomain: "ionic2-firebase-chat-a619f.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-a619f.firebaseio.com",
  projectId: "ionic2-firebase-chat-a619f",
  storageBucket: "ionic2-firebase-chat-a619f.appspot.com",
  messagingSenderId: "531528168618"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
