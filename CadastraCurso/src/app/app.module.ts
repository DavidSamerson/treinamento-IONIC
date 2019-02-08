
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Login } from './../pages/login/login';
import { Cadastro } from './../pages/cadastro/cadastro';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LAlunos } from './../pages/l-alunos/l-alunos';
import { CCursos } from './../pages/c-cursos/c-cursos';
import { CAlunos } from './../pages/c-alunos/c-alunos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Cadastro,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LAlunos,
    CCursos,
    CAlunos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Cadastro,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LAlunos,
    CCursos,
    CAlunos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
