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

  Evu_id : number;
  Teacher_id: number;
  public result : Evu[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,private score:ShowscoreProvider) {//, private score: ShowreportallProvider
    this.Evu_id = this.navParams.get('acEvuForm_id');
    this.Teacher_id = this.navParams.get('acTeacher_id');


    
    this.score.get_score(this.Evu_id, this.Teacher_id).then((data: any) => {
      console.log(data);
      this.result = data;
     
    });

  }

  ionViewDidLoad() {
   
    console.log(this.Evu_id + " " + this.Teacher_id);
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