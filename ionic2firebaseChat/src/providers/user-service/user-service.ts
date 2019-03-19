import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//ANGULAR
import { AngularFireModule } from 'angularfire2';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(
    public http: Http,
    public af: AngularFireModule
  ) {

  }
}
