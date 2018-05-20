import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowreportallProvider } from '../../providers/showreportall/showreportall';

/**
 * Generated class for the ListNameAssessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-name-assess',
  templateUrl: 'list-name-assess.html',
})
export class ListNameAssessPage {
  acYear: number;
  acTerm: number;
  Evu_name:String[];
  Subject_code :String[];
  Subject_name :String[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,public ListAssess:ShowreportallProvider) {
    this.acYear = this.navParams.get('acYear');
    this.acTerm = this.navParams.get('acTerm');

    this.ListAssess.get_FormAssess(this.acYear, this.acTerm).then((data:any)=>{
      console.log(data);
      this.Evu_name = data;
      this.Subject_name = data;
    })
  }
//ลองคอมเม้น


  ionViewDidLoad() {
    console.log(this.acYear + " " + this.acTerm);
  }

}
