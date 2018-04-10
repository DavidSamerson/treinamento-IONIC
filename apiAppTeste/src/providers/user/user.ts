import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/http';

@Injectable()
export class UserProvider {

  private API_URL = 'https://reqres.in/api/';

  constructor(public http: Http) 
  {
    console.log('Hello UserProvider Provider');
  }

  //criar Conta
  createAccount(email: string, password: string) {

    return new Promise((resolve, reject) => {

      //cria um objeto encapsulando o email e a senha
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'register', data)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

  //faz login no sistema
  login(email: string, password: string) {

    return new Promise((resolve, reject) => {

      //cria um objeto encapsulando o email e a senha
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'login', data)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

  //pega todos os resultados pra página especificada
  getAll(page: number) {

    return new Promise((resolve, reject) => {

      // //cria um objeto encapsulando o email e a senha
      // var data = {
      //   email: email,
      //   password: password
      // };

      let url = this.API_URL + 'users?per_page=10&page=' + page;

      this.http.get(url)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

  //Pega um único usuário passando o ID como parametro
  get(id: number) {

    return new Promise((resolve, reject) => {

      // //cria um objeto encapsulando o email e a senha
      // var data = {
      //   email: email,
      //   password: password
      // };

      let url = this.API_URL + 'users/' + id;

      this.http.get(url)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

  //Funções de CRUD de dados

  //insert
  insert(user: any) {

    return new Promise((resolve, reject) => {

      // //cria um objeto encapsulando o email e a senha
      // var data = {
      //   email: email,
      //   password: password
      // };

      let url = this.API_URL + 'users';

      this.http.post(url, user)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

  //update
  update(user: any) {

    return new Promise((resolve, reject) => {

      // //cria um objeto encapsulando o email e a senha
      // var data = {
      //   email: email,
      //   password: password
      // };

      let url = this.API_URL + 'users' + user.id;

      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

      this.http.put(url, data)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }

   //update
   remove(id: number) {

    return new Promise((resolve, reject) => {

      // //cria um objeto encapsulando o email e a senha
      // var data = {
      //   email: email,
      //   password: password
      // };

      let url = this.API_URL + 'users/' + id;
      
      this.http.delete(url)
      .subscribe((result: any) =>
      {
        resolve(result.json())
      },
      (error) => 
      {
        reject(error.json());
      });
    });
  }
}
