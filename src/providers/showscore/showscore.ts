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

  get_score(acYear:any,acTerm:any) {
    return new Promise((resolve, reject) => {
      let url ="http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/sqlreport.php?acYear=" + acYear + "&acTerm=" + acTerm;
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        })
    });
    // console.log(this.http.get(url));
  }

}
