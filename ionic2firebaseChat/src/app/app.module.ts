import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { SignupPage } from '../pages/signup/signup';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDo0ogZC-AiCeybr8PWWF5RmuJDQDoSZiw",
  authDomain: "ionic-firebase-chat-bb059.firebaseapp.com",
  databaseURL: "https://ionic-firebase-chat-bb059.firebaseio.com",
  projectId: "ionic-firebase-chat-bb059",
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
