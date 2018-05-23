import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DaassessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DaassessProvider {

  constructor(public http: Http) {
    console.log('Hello DaassessProvider Provider');
  }

  // insert_score(topic: any, pointteach: any, topic_scr: any, sub_scr: any, scr: any) {
  //   return new Promise((resolve, reject) => {
  //     let url = "http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/reportall.php/is_data?Topic=" + topic + "&Point_th=" + pointteach + "&Topic_scr=" + topic_scr + "&Sub_scr=" + sub_scr + "&Scr=" + scr;
  //     console.log(url);

  //     this.http.get(url)
  //       .map(res => res.json()).subscribe(data => {
  //         resolve(data);
  //       })
  //   });

  // }

}
