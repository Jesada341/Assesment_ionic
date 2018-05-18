import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    
  }
  ionViewDidLoad(){
   console.log(this.NavParams.get('id'));
  }
}
