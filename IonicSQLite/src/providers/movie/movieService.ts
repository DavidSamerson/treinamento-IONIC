import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieServiceProvider {

  constructor(public http: HttpClient) {

  }

}
