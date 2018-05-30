import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado2: Array<Object> = [];
  categories: Array<Object> = [];

  constructor(public navCtrl: NavController) {

    this.categories  = [{
          "id": "00QA000001TL1X7MAL",
          "name": "Luana da Silva CruuZZZZZZZ",
          "email": "luanasilva45261@gmail.com",
          "mobilePhone": "(98) 98313-6074",
          "status": "Tentativa"
      },{
        "id": "00QA000001TL1X7MAL",
        "name": "Luana da Silva Cruz",
        "email": "luanasilva45261@gmail.com",
        "mobilePhone": "(98) 98313-6074",
        "status": "Tentativa"
    },
    {
      "id": "00QA000001TL1X7MAL",
      "name": "Luana da Silva Cruz",
      "email": "luanasilva45261@gmail.com",
      "mobilePhone": "(98) 98313-6074",
      "status": "Tentativa"
  }];
   this.resultado2 = [] ;
  }


}
