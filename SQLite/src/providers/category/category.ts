import { DatabaseProvider } from './../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryProvider {

  constructor( private dbProvider : DatabaseProvider) {
    console.log('Olá Providers de Categoria');
  }

  public getAll() {

    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'select * from categories';


        return db.executeSql(sql, [])
              .then((data: any) => {

                if(data.rows.length > 0){

                    // percorrer o resultado e adicionar em um objeto
                  let categories : any [] = [];

                  for(var i = 0; i < data.rows.length; i++) {

                      var category = data.rows.item(i);

                      categories.push(category);
                  }

                  return categories;

                } else {

                  return [];
                
                }
              })
              .catch((e) => console.error(e)); //executa um SQL

      })
      .catch((e) => console.error(e));
  }

}
