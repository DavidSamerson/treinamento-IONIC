import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class LoginProvider {

  private API_URL = "https://cs96.salesforce.com/services/oauth2/token";
  // private token = "";

  constructor(public http: Http) {
    console.log('Entrando na provider de Login');
  }

  login (email: string, password: string) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json; charset=utf-8',
      //   id: '105',
      //   user_id: '90'
      // });

    let body = new FormData();
        body.append('grant_type','password');
        body.append('client_id','3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7');
        body.append('client_secret','8770981992942896379');
        body.append('username', email);
        body.append('password', password);

    let options = new RequestOptions({ headers: headers });

    console.log(body);

    return new Promise((resolve, reject) => {

      this.http.post(this.API_URL, body, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log("Error! Message: ", error);
          });
        // .subscribe((result: any) => {
        //   console.log("Requisição efetuada");
        //   resolve(result.json());
        // },
        //   (error) => {
        //     reject(error.json());
        //     console.log("Erro na requisição");
        //   });
    });
  }

}
