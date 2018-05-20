import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowscoreProvider } from '../../providers/showscore/showscore';

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
  public result : Evu[];
  status : number;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private score:ShowscoreProvider) {//, private score: ShowreportallProvider
    this.acYear = this.navParams.get('acYear');
    this.acTerm = this.navParams.get('acTerm');


    
    this.score.get_score(this.acYear,this.acTerm).then((data: any) => {
      console.log(data);
      this.result = data;
     
    });

  }

  ionViewDidLoad() {
   
    console.log(this.acYear+" "+this.acTerm);
  }

}

interface Evu {
  Evu_name:string;
  Evu_year:string;
  Evu_term:string;
  Evu_data:Topic[];

}

interface Topic {
  Topic_name:string;
  Sub_data:Sub[];
}

interface Sub {
  Sub_name:string;
  Point:string;
}