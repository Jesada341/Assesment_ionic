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
  public coAcY : number ;
  public tmName :String[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,public report:ShowreportallProvider) {
    this.report.getAcY().then((data: any)=>{
      console.log(data);
      this.coAcY = data;
    })

    this.report.getTerm().then((data: any) => {
      console.log(data);
      this.tmName = data;
    })
  }
  SearchList(YearStudy : number,Term : String){
    console.log(YearStudy+ " "+ Term);

  }
  ionViewDidLoad() {

  }

}
