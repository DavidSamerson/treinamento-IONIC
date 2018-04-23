import { RequestOptions } from '@angular/http';
// import { HTTP } from "@ionic-native/http";
import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class LoginProvider {

  private API_URL = "https://cs96.salesforce.com/services/oauth2/token";

  constructor(
    public http: Http,
    public toast: ToastController
  ) {}

  //método priovider que efetua a conexão com o salesforce
  login(email: string, password: string) {
    //configurações de requisição----------

    //cabeçalho
    let header = JSON.stringify({
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin" : "true"
    });
    let headers = new Headers({
      "Content-Type": "application/application/x-www-form-urlencoded"
    });

    let options = new RequestOptions({ headers: headers });

    //métodos de configuração do objeto de RequestOptions
    options.body =
      "grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6";
    options.method = "post";
    options.url = "https://cs96.salesforce.com/services/oauth2/token";

    let bodyteste = JSON.stringify(
      'grant_type=password&client_id=3MVG9AzPSkglhtps5GKCVvVsZxbvTiThV6KhFCwSatL6665Syr5ZKsZCRFZDK1Yu3K0xjPIWUHO7FciqL2kr7&client_secret=8770981992942896379&username=wbatista@moldsoft.com.br.devry.testes&password=w89018423rQDsBmsZsBOeCaDqkm4evap6'
    );

    return new Promise((resolve, reject) => {
      this.http
        .post(this.API_URL, bodyteste, header )
        .subscribe((result: any) => {
          resolve(result.json());

          this.toast.create({
                  message: " Usuário logado com sucesso. ",
                  position: "botton",
                  duration: 3000000000000000000000000000
                })
                .present();

        },
        (error) => {

          this.toast
            .create({
              message: " Erro. ",
              position: "botton",
              duration: 3000000000000000000000000000
            })
            .present();

          reject(error.json());
        });
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
}
