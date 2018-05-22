import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowreportallProvider } from '../../providers/showreportall/showreportall';
import { ShowscorePage} from '../showscore/showscore';

/**
 * Generated class for the ListTeachFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-teach-form',
  templateUrl: 'list-teach-form.html',
})
export class ListTeachFormPage {
  Evu_id: String[];
  Evu_term :String[];
  Evu_year : String[];
  EvuForm_id : String[];
  Teacher_id  : String[] ;
  Teacher_prefix : String[];
  Teacher_name : String [];
  Teacher_lastname: String[];
  Subject_code: String[];
  Subject_name: String[];
  Evu_name : String[];
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public ListTeachSubject: ShowreportallProvider) {
    this.Evu_id = this.navParams.get('acEvu_id');
    

    console.log(this.Evu_id +" ListTeacher Test");
 

    this.ListTeachSubject.get_TeachSubjectForm(this.Evu_id).then((data: any) => {
      this.Teacher_id = data;
      this.Teacher_prefix = data;
      this.Teacher_name = data;
      this.Teacher_lastname = data;
      this.Subject_code = data;
      this.Subject_name = data;
      this.Evu_name = data;
      this.Evu_term = data;
      this.Evu_year = data ;

      console.log(data);

    })

    this.ListTeachSubject.get_FormAssess(this.Evu_year, this.Evu_term).then((data: any) => {
      this.Evu_name = data;
      this.Evu_id = data;
      console.log(data);

    })
  
    
  }
  ShowScore(EvuForm_id, Teacher_id) {
    console.log(EvuForm_id + " " + Teacher_id);
    this.navCtrl.push(ShowscorePage, {
      acEvuForm_id: EvuForm_id,
      acTeacher_id: Teacher_id
    });
  }
  ionViewDidLoad() {
  
  }

}
