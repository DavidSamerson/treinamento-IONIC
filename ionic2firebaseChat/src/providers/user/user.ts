import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireModule} from 'angularFire2';
import { User } from '../../models/user.model';


@Injectable()
export class UserService {

  constructor(
    public af: AngularFireModule,
    public http: HttpClient
  ) {
  }

  create(user: User): firebase.Promise<any> {
    return this.af.database.list('/users').push(user);
  }


}
