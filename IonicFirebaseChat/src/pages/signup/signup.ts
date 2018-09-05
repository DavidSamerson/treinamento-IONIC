import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'SignupPage',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      //não se põe aspas nas REGEX de validação
      let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      //quando a regra é mais de uma, sempre é posta dentro de []
      this.signupForm = this.formBuilder.group({
          nome: ['', [Validators.required, Validators.minLength(3)]],
          sobrenome: ['',[Validators.required, Validators.minLength(3)]],
          email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          senha: ['', [Validators.required, Validators.minLength(6)]]
      });

  }

  ionViewDidLoad() {

  }

  onSubmit(): void {
    console.log('Form Submit');
  }

}
