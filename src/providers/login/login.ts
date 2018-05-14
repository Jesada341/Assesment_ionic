// import { HttpClient} from '@angular/common/http';
import { Http} from '@angular/http'; //Not have Headers, RequestOptions
// import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable  } from '@angular/core';
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

  doLogin(username: string, password: string){
    // alert(username+'/'+password);
    return new Promise((resolve,reject) => {
    this.http.get('http://10.80.39.17/TSP58/nursing/index.php/amis/Mobile/Ionic/Service/Login/'+username+'/'+password)
    .map(res=>res.json())
    .subscribe(data => {
      resolve(data);
    },error => {
      resolve(error);
    });

    })

  }
}
