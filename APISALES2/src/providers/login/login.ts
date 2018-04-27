// import { Angular2TokenService } from "angular2-token-ionic3";
import { RequestOptions } from "@angular/http";
// import { HTTP } from "@ionic-native/http";
import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable()
export class LoginProvider {
  private API_URL = "https://localhost:8100/cs96.salesforce.com/services/oauth2/token";

  constructor(
    public http: Http,
    public toast: ToastController,
    // private _tokenService: Angular2TokenService
  ) {

    // this._tokenService.init({
    //   apiBase: null,
    //   apiPath: null,

    //   signInPath: "auth/sign_in",
    //   signInRedirect: null,
    //   signInStoredUrlStorageKey: null,

    //   signOutPath: "auth/sign_out",
    //   validateTokenPath: "auth/validate_token",
    //   signOutFailedValidate: false,

    //   registerAccountPath: "auth",
    //   deleteAccountPath: "auth",
    //   registerAccountCallback: window.location.href,

    //   updatePasswordPath: "auth",
    //   resetPasswordPath: "auth/password",
    //   resetPasswordCallback: window.location.href,

    //   oAuthBase: window.location.origin,
    //   oAuthPaths: {
    //     github: "auth/github"
    //   },
    //   oAuthCallbackPath: "oauth_callback",
    //   oAuthWindowType: "newWindow",
    //   oAuthWindowOptions: null,
    //   oAuthBrowserCallback: null,

    //   userTypes: null,

    //   globalOptions: {
    //     headers: {
    //       "Content-Type": "x-www-form-urlencoded",
    //       Accept: "x-www-form-urlencoded"
    //     }
    //   }
    // });
  }

  //método priovider que efetua a conexão com o salesforce
  login(email: string, password: string) {
    //configurações de requisição----------

    //cabeçalho
    let header = JSON.stringify({
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials" : "true"
    });
    let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Access-Control-Allow-Credentials","true");
        headers.append("Access-Control-Allow-Origin", "*");

    let options = new RequestOptions({ headers: headers });

    let bodyteste =
      "grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6"
    ;

    console.log(bodyteste);

    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL, bodyteste,options).subscribe(
        (result: any) => {
          resolve(result.json());

          this.toast
            .create({
              message: " Usuário logado com sucesso. ",
              position: "botton",
              duration: 3000000000000000000000000000
            })
            .present();
        },
        error => {
          this.toast
            .create({
              message: " Erro. ",
              position: "botton",
              duration: 3000000000000000000000000000
            })
            .present();

          reject(error.json());
        }
      );
      // .then(result => {
      //   this.toast
      //     .create({
      //       message: " Usuário logado com sucesso. ",
      //       position: "botton",
      //       duration: 3000000000000000000000000000
      //     })
      //     .present();

      //   console.log("Requisição efetuada");
      //   // resolve(result.json());
      // })
      // .catch(err => {
      //   this.toast
      //     .create({
      //       message: " Erro. ",
      //       position: "botton",
      //       duration: 3000000000000000000000000000
      //     })
      //     .present();

      //   // reject(error.json());
      //   console.log("Erro na requisição");
      // });
    });
  }

  //método puro com XHTTP que faz conexão com o API do salesforce
  loginViaPost(email: string, password: string) {


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
      }
    };

    //tentar por o 127.0.0.1:8100/
    xhttp.open(
      "POST",
      "https://cs96.salesforce.com/services/oauth2/token",
      true
    );


    xhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xhttp.setRequestHeader(
    "Access-Control-Allow-Origin",
    "*"
     );
     xhttp.setRequestHeader(
     "Access-Control-Allow-Credentials" , "true"
    );


    let data = xhttp.send(
      "grant_type=password&" +
        "client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&" +
        "client_secret=8770981992942896379&" +
        "username=" +
        email +
        "&" +
        "password=" +
        password
    );

    console.log(data);
  }

  // loginViaPost2(email: string, password: string) {
  //   //cabeçalho
  //   let header = JSON.stringify({
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Access-Control-Allow-Origin": "*"
  //   });
  //   let headers = new Headers({
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Access-Control-Allow-Origin": "*"
  //   });

  //   let options = new RequestOptions({ headers: headers });

  //   //métodos de configuração do objeto de RequestOptions
  //   options.body =
  //     "grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6";
  //   options.method = "post";
  //   options.url = "https://cs96.salesforce.com/services/oauth2/token";

  //   let bodyteste = JSON.stringify(
  //     "grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6"
  //   );

  //   return new Promise((resolve, reject) => {
  //     this._tokenService.post(this.API_URL, bodyteste, header).subscribe(
  //       (result: any) => {
  //         resolve(result.json());

  //         this.toast
  //           .create({
  //             message: " Usuário logado com sucesso. ",
  //             position: "botton",
  //             duration: 3000000000000000000000000000
  //           })
  //           .present();
  //       },
  //       error => {
  //         this.toast
  //           .create({
  //             message: " Erro. ",
  //             position: "botton",
  //             duration: 3000000000000000000000000000
  //           })
  //           .present();

  //         reject(error.json());
  //       }
  //     );
  //   });
  // }
}
