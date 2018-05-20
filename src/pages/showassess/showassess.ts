import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoassessPage } from '../doassess/doassess';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowassessPage');
  }

  doAssess(){
    console.log('doAssess function');
    this.navCtrl.push(DoassessPage,{
      acYear: 2,
      acTerm: 1
    });
  }

}
