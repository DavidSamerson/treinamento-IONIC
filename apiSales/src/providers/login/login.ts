import { ToastController } from 'ionic-angular';
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

  constructor(private http: Http, public toast: ToastController) {
    console.log('Entrando na provider de Login');
  }

  login(email: string, password: string) {

    //  let headers = new Headers();
    //   headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //   let data = JSON.stringify({body: 'grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6';
    // });

    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      });

    let options = new RequestOptions({ headers: headers });
    options.body = 'grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6';
    options.method = 'post';
    options.url = 'https://cs96.salesforce.com/services/oauth2/token';

    //solução 1 -----------------------
    // let data = "grant_type=password"+
    //       "&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7"+
    //       "&client_secret=8770981992942896379"+
    //       "&username=" + email + "&password=" + password;

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json; charset=utf-8',
    //   id: '105',
    //   user_id: '90'
    // });

    //solução 2 ---------------------------------------
    // let body = new FormData();
    //     body.append('grant_type','password');
    //     body.append('client_id','3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7');
    //     body.append('client_secret','8770981992942896379');
    //     body.append('username', email);
    //     body.append('password', password);


    //var body = "grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6";

    // console.log(this.API_URL);
    // console.log(body);
    // console.log(options);

    return new Promise((resolve, reject) => {

      this.http.post(this.API_URL, options.body, options)
        .subscribe((result: any) => {

          this.toast.create({
            message: 'Entrou  no certo e gerou: ' + result.toString() + result.data['id']
              + result.json() + result.id + result.data.id, position: 'botton', duration: 3000
          }).present();

          console.log("Requisição efetuada");
          resolve(result.json());
        },
          (error) => {

            reject(error.json());
            console.log("Erro na requisição");
          });

      //     .map(res => res.json())
      //     .subscribe(
      //         data => {
      //           console.log(data);
      //         },
      //         error => {
      //           console.log("Error! Message: ", error);
      //         });
    });
  }

  login2(email: string, password: string) {

    return new Promise((resolve, reject) => {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(xhttp.responseText);
        }
      };
      xhttp.open("POST", "https://cs96.salesforce.com/services/oauth2/token", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6");

    });

}

}
