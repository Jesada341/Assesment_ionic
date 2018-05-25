import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
// import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  // public result : user[];
  data: any;
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.data = this.NavParams.get('user_data');
    
    
  }
  ionViewDidLoad(){
    
  }
}
// interface user {
//   id:any;
//   prefix:string;
//   fname:string;
//   lname:string;
//   img:string;
// }
