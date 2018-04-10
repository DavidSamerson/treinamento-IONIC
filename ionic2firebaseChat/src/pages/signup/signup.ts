import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../providers/user/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    
    public userService: UserService) {
      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9]*[a-z0-9])?)*$/i;

      this.signupForm = this.formBuilder.group({

        Nome: ['', [Validators.required, Validators.minLength(3)]],
        Sobrenome: ['', [Validators.required, Validators.minLength(3)]],
        Email: ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)])]],
        Senha: ['', [Validators.required, Validators.minLength(6)]],
       
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSubmit(){
    this.userService.create(this.signupForm.value).then(() => {
      console.log("Usuário Cadastrado!");
    });
  }

}
