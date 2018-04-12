import { CategoryProvider } from './../category/category';
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
          product.active ? 1 : 0,
          product.category_id
        ]; //variavel que vai pro banco

        return db.executeSql(sql, data)
              .catch((e) => console.error(e)); //executa um SQL

      })
      .catch((e) => console.error(e));

  }

  public update (product : Product) {

    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'update products set name = ?, price = ?, duedate = ?, active = ?, category_id = ? where id = ?';
        let data = [
          product.name,
          product.price,
          product.duedate,
          product.active ? 1 : 0,
          product.category_id,
          product.id
        ]; //variavel que vai pro banco

        return db.executeSql(sql, data)
              .catch((e) => console.error(e)); //executa um SQL

      })
      .catch((e) => console.error(e));

  }

  public remove (id: number) {

    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'delete from products where id = ?';
        let data = [id]; //variavel que vai pro banco

        return db.executeSql(sql, data)
              .catch((e) => console.error(e)); //executa um SQL

      })
      .catch((e) => console.error(e));

  }

  public get (id: number) {

    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'select * from products where id = ?';
        let data = [id]; //variavel que vai pro banco

        //.then tem que tratar o resultado do select
        return db.executeSql(sql, data)
              .then((data: any) => {

                  if(data.rows.length > 0){

                    //pega a primeira linha
                    let item = data.rows.item(0);

                    //inicia um novo Objeto Produto
                    let product = new Product();

                    //populando o banco
                      product.id = item.id;
                      product.name = item.name;
                      product.price = item.price;
                      product.duedate = item.duedate;
                      product.active = item.active;
                      product.category_id = item.category_id;
                  }

                  return null;

              })
              .catch((e) => console.error(e)); //executa um SQL

      })
      .catch((e) => console.error(e));

  }

  public getAll(active: boolean, name: string = null) {

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
