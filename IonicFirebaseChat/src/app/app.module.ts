import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { FirebaseAppConfig, AngularFireModule } from 'angularfire2';
import { SignupPage } from '../pages/signup/signup';
//
// - download das dependências
//npm i -S -E angularfire2@5.0.0-rc.4 firebase@4.5.1

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDo0ogZC-AiCeybr8PWWF5RmuJDQDoSZiw",
  authDomain: "ionic-firebase-chat-bb059.firebaseapp.com",
  databaseURL: "https://ionic-firebase-chat-bb059.firebaseio.com",
  storageBucket: "ionic-firebase-chat-bb059.appspot.com",
  messagingSenderId: "365920500815"
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
