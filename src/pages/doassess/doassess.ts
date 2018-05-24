import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from './../../providers/login/login';
import { NgModel } from '@angular/forms';

/**
 * Generated class for the DoassessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doassess',
  templateUrl: 'doassess.html',
})
export class DoassessPage {
  topic: String = "1";
  pointteach: String = "1";
  topic_scr: String[];
  sub_scr: String[];
  scr: String[];
  Teacher_of_evu: number;
  Subject_of_form: number;
  public result: Evu[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private score: LoginProvider) {
    this.Teacher_of_evu = this.navParams.get('Teacher_id');
    this.Subject_of_form = this.navParams.get('Form_id');

    this.score.Show_question(this.Teacher_of_evu, this.Subject_of_form).then((data: any) => {
      console.log(data);
      this.result = data;
    });
  }

  ionViewDidLoad() {
    console.log(this.Teacher_of_evu + " " + this.Subject_of_form);
  }


  save_score(topic_scr, sub_scr, scr) {
    console.log('	Point_sub_of_question : ' + topic_scr + '	Point_sub : ' + sub_scr + ' Point ' + scr);
    // this.score_all.insert_score(this.topic, this.pointteach, topic_scr, sub_scr, scr).then((data: any) => {
    //   console.log(data);
    // });
  }
}


interface Evu {
  Evu_name: string;
  Evu_year: string;
  Evu_term: string;
  Evu_data: Topic[];
}

interface Topic {
  Topic_name: string;
  Sub_data: Sub[];
}

interface Sub {
  Sub_name: string;
  Point: string;
}
