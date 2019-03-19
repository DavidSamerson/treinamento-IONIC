import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFire} from 'angularfire2';

import "rxjs/add/operator/map";

@Injectable()
export class UserProvider {

  constructor(
    public af: AngularFire,
    public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  create (user: User): Promise<void> {
    return this.af.database.list(`/users`)
            .push(user);
  }
}
