import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowreportallProvider } from '../../providers/showreportall/showreportall';
import { ListTeachFormPage } from '../list-teach-form/list-teach-form';

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
  Evu_id : String[];
  Evu_name:String[];
  Subject_code :String[];
  Subject_name :String[];



  constructor(public navCtrl: NavController, public navParams: NavParams ,public ListAssess:ShowreportallProvider) {
    this.acYear = this.navParams.get('acYear');
    this.acTerm = this.navParams.get('acTerm');

    this.ListAssess.get_FormAssess(this.acYear, this.acTerm).then((data:any)=>{
      this.Evu_name = data;
      this.Evu_id = data;
      console.log(data);
     
    })
  }
//ลองคอมเม้น
  ListTechOfSubject(Evu_id) {
    console.log(Evu_id+"asdasdasdasdasdasdasd");
    this.navCtrl.push(ListTeachFormPage, {
      acEvu_id : Evu_id
    });
  }

  ionViewDidLoad() {
  
  }
  

}

