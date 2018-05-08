import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShowreportallProvider } from "../../providers/showreportall/showreportall";

/**
 * Generated class for the ShowreportallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-showreportall',
  templateUrl: 'showreportall.html',
})
export class ShowreportallPage {
  public Evu_year : number ;
  public Evu_term: number;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public report:ShowreportallProvider) {
    this.report.getYear().then((data: any)=>{
      console.log(data);
      this.Evu_year = data;
    })
    this.report.getAllForm().then((data: any) => {
      console.log(data);
      this.Evu_term = data;
    })

    // this.report.getTerm().then((data: any) => {
    //   console.log(data);
    //   this.tmName = data;
    // })
  }
  SearchList(YearStudy: number, TermStudy : number){
    console.log(YearStudy + " " + TermStudy);

  }
  ionViewDidLoad() {

  }

}
