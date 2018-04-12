import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()
export class PcepProvider {

  private API_URL = 'https://viacep.com.br/ws/'

  constructor(public http: Http, public toast : ToastController) {
    console.log('P-cep instanciada com sucesso!');
  }

  getCPF(cep: string) {

    return new Promise((resolve, reject) => {

      let url = this.API_URL + cep + '/json/';
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
          
          
        },
        (erro) => {
          reject(erro.json());

          this.toast.create({ message: 'Erro ao pesquisar o cep..', position: 'botton', duration: 3000 }).present();

        });
    });
  }

}
