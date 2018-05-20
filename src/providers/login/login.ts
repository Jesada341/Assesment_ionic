// import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http'; //Not have Headers, RequestOptions
// import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    // console.log('Hello LoginProvider Provider');
  }

  doLogin(username: string, password: string) {
    // alert(username+'/'+password);
    return new Promise((resolve, reject) => {
      this.http.get('http://10.80.39.17/TSP58/nursing/index.php/amis/Mobile/Ionic/Service/Login/' + username + '/' + password)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          var data = '';
          resolve(data);
        });

    })

  }

  get_score(acYear: any, acTerm: any) {
    return new Promise((resolve, reject) => {
      let url = "http://10.80.39.17/TSP58/nursing/application/controllers/amis/Mobile/Ionic/sqlreport.php?acYear=" + 2560 + "&acTerm=" + 1;
      this.http.get(url)
        .map(res => res.json()).subscribe(data => {
          resolve(data);
        })
    });
    // console.log(this.http.get(url));
  }
}
