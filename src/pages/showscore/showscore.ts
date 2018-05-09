import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowreportallPage } from '../showreportall/showreportall';
import { ShowreportallProvider } from '../../providers/showreportall/showreportall';

/**
 * Generated class for the ShowscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showscore',
  templateUrl: 'showscore.html',
})
export class ShowscorePage {

  acYear : number;
  acTerm : number;

  constructor(public navCtrl: NavController, public navParams: NavParams , private score: ShowreportallProvider) {
    this.acYear = this.navParams.get('acYear');
    this.acTerm = this.navParams.get('acTerm');

    this.score.CheckStatusAssest(this.acYear,this.acTerm).then((data: any) => {
      console.log(data);
    })
    


  }

  ionViewDidLoad() {
   
    console.log(this.acYear+" "+this.acTerm);
  }

}
