import { DatabaseProvider } from './../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductProvider {

  constructor( private dbProvider : DatabaseProvider) {

    console.log('Entrando no Product');

  }

  public insert (product : Product) {

    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        
        let sql = 'insert into products (name, price, duedate, active, category_id) values (?, ?, ?, ?, ?)';
        let data = [
          product.name,
          product.price,
          product.duedate,
          product.active,
          product.category_id
        ]; //variavel que vai pro banco

      })
      .catch((e) => console.error(e));

  }

}

export class Product {

  id: number;
  name: string;
  price: number;
  duedate: Date;
  active: boolean;
  category_id: number;

}
