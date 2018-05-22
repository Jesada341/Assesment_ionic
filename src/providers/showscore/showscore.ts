import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShowscoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowscoreProvider {

  constructor(public http: Http) {
    console.log('Hello ShowscoreProvider Provider');
  }

  get_score(Evu_id:any,Teacher_id:any) {
    console.log(Evu_id +" ค่าาาา" + Teacher_id);
    
    return new Promise((resolve, reject) => {
      let url ="http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/sqlreport.php?Evu_id=" + Evu_id + "&Teacher_id=" + Teacher_id;
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        })
    });
    // console.log(this.http.get(url));
  }

}
