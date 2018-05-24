import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoassessPage } from '../doassess/doassess';
import { LoginProvider } from './../../providers/login/login';
/**
 * Generated class for the ShowassessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showassess',
  templateUrl: 'showassess.html',
})
export class ShowassessPage {
  assess: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginCtrl: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowassessPage');
    this.loginCtrl.Show_assess()
    .then((data: any) => {
      if (data != '') {
        console.log(data);
        this.assess = data;
      } else {
        this.assess = '';
      }
    });
  }

  doAssess(){
    console.log('doAssess function');
    this.navCtrl.push(DoassessPage,{
      acYear: 2,
      acTerm: 1
    });
  }

}
