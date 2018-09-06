import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';


@Injectable()
export class UserService {

  constructor(
    public af: AngularFireModule,
    public http: HttpClient
  ) {
  }

  create(user: User): Promise<any> {
    return this.af.database.list('/users').push(user);
  }


}
