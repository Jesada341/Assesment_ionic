import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowreportallProvider } from '../../providers/showreportall/showreportall';

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
  Teacher_id  : number ;
  Teacher_prefix : String[];
  Teacher_name : String [];
  Teacher_lastname: String[];
  Subject_code: String[];
  Subject_name: String[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public ListTeachSubject: ShowreportallProvider) {
    this.Evu_id = this.navParams.get('acEvu_id');
    console.log(this.Evu_id +"ListTeacher");

    this.ListTeachSubject.get_TeachSubjectForm(this.Evu_id).then((data: any) => {
      this.Teacher_id = data;
      this.Teacher_prefix = data;
      this.Teacher_name = data;
      this.Teacher_lastname = data;
      this.Subject_code = data;
      this.Subject_name = data;
      console.log(data);

    })
    
  }

  ionViewDidLoad() {
  
  }

}
