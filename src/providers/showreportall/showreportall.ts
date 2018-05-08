import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShowreportallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowreportallProvider {

  constructor(public http: Http) {
    //console.log('Hello ShowreportallProvider Provider');

  }
  getAllForm(){
    return new Promise((resolve, reject) => {
      let url = "http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/reportall.php/getAllForm";

      this.http.get(url)
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        })
    });
  }
  // getTerm(){
  //   return new Promise((resolve, reject) => {
  //     let url = "http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/reportall.php/getTerm";

  //     this.http.get(url)
  //       .map(res => res.json()).subscribe(data => {
  //         resolve(data);
  //       })
  //   });
  
  // }
  

}
