import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  // private isOpen: boolean;

  constructor(public http: HttpClient) {
  }

   /* if(!this.isOpen){
      this.db.
       // this.storage = new SQLite();
      this.storage.create({name: "data.db", location: "default"}).then((db: SQLiteObject)=>{
        this.db = new SQLite();
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification  INTEGER, name TEXT, lastname text)", []);
        this.isOpen = true;
      }).catch((error)=> {
        console.log(error);
      })
    }*/

 /* CreateUser(identification:number,name: string, lastname: string){
    return new Promise ((resolve, reject) =>{
      let sql = "INSERT INTO users(identification,name,lastname) VALUES(?,?,?)";
      this.db.executeSql(sql,[identification, name, lastname]).then((data) =>{
        resolve (data);

},(error)=>{
        reject(error);
});
});
}
getAllUsers(){
    return new Promise((resolve,reject)=>{
      this.db.executeSql("SELECT * FROM users", []).then((data)=>{
        let arrayUsers = [];
        if(data.rows.length > 0){
          for (var i=0; i< data.rows.length; i++){
            arrayUsers.push({
              id: data.rows.item(i).id,
              identification: data.rows.item(i).identification,
              name: data.rows.item(i).name,
              lastname: data.rows.item(i).lastname,
            });
          }
        }
        resolve(arrayUsers);
      },(error) =>{
        reject(error);
      })
    })
}*/

}
