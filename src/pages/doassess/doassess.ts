import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from './../../providers/login/login';
import { NgModel } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ShowassessPage } from '../showassess/showassess';

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
  // topic: String = "1";
  // pointteach: String = "1";
  round: number = 0;
  topic_scr: String[];
  sub_scr: any;
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

    // this.score.save_score(this.sub_scr, this.topic_scr,this.Subject_of_form, this.scr, this.Teacher_of_evu).then((data: any) => {
    //   // console.log('	Point_sub_of_question : ' + this.topic_scr + '	Point_sub : ' + this.sub_scr + ' Point ' + this.scr + 'form_id' + this.Subject_of_form + 'teacher_id' + this.Teacher_of_evu);
    //   // this.result = data;
    //   // this.score_all.insert_score(this.topic, this.pointteach, topic_scr, sub_scr, scr).then((data: any) => {
    //   //   console.log(data);
    //   // });
    // });

  }

  ionViewDidLoad() {
    console.log(this.Teacher_of_evu + " " + this.Subject_of_form);
  }


  save_score(sub_scr, topic_scr, scr) {
    // console.log('	index1 : ' + sub_scr + '	index2 : ' + topic_scr + ' index3 ' + this.Subject_of_form + 'index4 ' + scr + 'index5 ' +this.Teacher_of_evu);

    this.score.save_score(sub_scr,topic_scr, this.Subject_of_form, scr, this.Teacher_of_evu).subscribe((response) => {
      console.log("add log :" + response);
      this.result = response;
      // console.log(this.result.status + " : " + this.result.err_txt);
      // if (this.result.status) {
      //   this.skilldata.get_skill().subscribe((response) => {
      //     this.skill_lists = response;
      //   });
      // }
    });

  }

  Insert(sub_scr, point, scr) {
    for (var i = 0; i < scr; i++) {
      console.log('point:' + point + 'index' + sub_scr[i][i][i]);
    }
    // console.log('	Point_sub_of_question : ' + topic_scr + '	Point_sub : ' + sub_scr + ' Point ' + scr);
    // this.score.save_score(this.sub_scr, this.topic_scr, this.Subject_of_form, this.scr, this.Teacher_of_evu).then((data: any) => {
    // console.log('	Point_sub_of_question : ' + this.topic_scr + '	Point_sub : ' + this.sub_scr + ' Point ' + this.scr + 'form_id' + this.Subject_of_form + 'teacher_id' + this.Teacher_of_evu);
    // this.result = data;
    // this.score_all.insert_score(this.topic, this.pointteach, topic_scr, sub_scr, scr).then((data: any) => {
    //   console.log(data);
    // });

    // });
  }
  // insertData() {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   let options = new RequestOptions({ headers: headers });

  //   let postParams = {
  //     topic_scr : this.topic_scr,
  //     sub_scr: this.sub_scr,
  //     scr: this.scr,
  //   }
  //   this.http.post("http://localhost:9090/restexample/RestController.php?view=insert", JSON.stringify(postParams), options)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //     }, error => {
  //       console.log(error);// Error getting the data
  //     });
  // }
  Submit(Evu_id) {
    console.log("asdasdasdasdasdasdasd");
    this.navCtrl.push(ShowassessPage, {
      
    });
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
