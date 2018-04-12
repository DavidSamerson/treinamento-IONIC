import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('database OK!');
  }

  public getDB() {

    //responsável por abrir ou criar um Database
    return this.sqlite.create({
      name: 'products.db',
      location: 'default'
    });

  }

  public createDatabase() {

    //responsável por criar as tabelas iniciais no banco
    return this.getDB()
      .then((db: SQLiteObject) => {

          //Cria as tabelas
          this.createTables(db);

          //seta valores padrão
          this.insertDefaultItems(db);

      })
      .catch(e => console.error(e));
  }

  //métodos que o createDatabase chama para criar tabelas, etc.
  private createTables(db: SQLiteObject) {

    //SQLBatch é um array de arrays que executa vários comandos de uma vez, em lotes
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
      ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL,' +
        ' name TEXT, price REAL, duedate DATE, active integer, category_id integer, ' +
        'FOREIGN KEY(category_id) REFERENCES categories(id))']
    ])
      .then(() => console.log('Tabelas criadas com sucesso!'))
      .catch(e => console.error('Erro ao criar as tabelas', e));

  }

  //inserir valores Default
  private insertDefaultItems(db: SQLiteObject) {

    db.executeSql('select COUNT(id) as qtd from categories', {})
      .then((data: any) => {

        //Se não existir nenhum registro nessa tabela
        if (data.rows.item(0).qtd == 0) {

          //criando as tabelas
          db.sqlBatch([
            ['insert into categories (name) values (?)', ['Hambúrgueres']],
            ['insert into categories (name) values (?)', ['Bebidas']],
            ['insert into categories (name) values (?)', ['Sobremesas']]
          ])
            .then(() => console.log('Dados Padrões Incluidos'))
            .catch(e => console.error('Erro ao incluir dados padrões', e));

        }

      })
      .catch(e => console.error('Erro ao incluir dados padrões', e));
  }

}
