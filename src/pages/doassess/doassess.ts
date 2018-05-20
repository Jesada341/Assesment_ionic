import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from './../../providers/login/login';

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
  Teacher_of_evu: number;
  Subject_of_form: number;
  public result: Evu[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private score: LoginProvider) {
    this.Teacher_of_evu = this.navParams.get('acYear');
    this.Subject_of_form = this.navParams.get('acTerm');

    // this.score.CheckStatusAssest(this.acYear,this.acTerm).then((data: any) => {
    //   console.log(data);
    // });

    this.score.Show_question(this.Teacher_of_evu, this.Subject_of_form).then((data: any) => {
      console.log(data);
      this.result = data;
    });

  }

  ionViewDidLoad() {

    console.log(this.Teacher_of_evu + " " + this.Subject_of_form);
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
