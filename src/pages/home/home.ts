import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { GrobalData } from '../grobal-data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public prefix: any;
  public fname: any;
  public lname: any;
  public img: any;
  // public result : user[];
  data: any;
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.prefix = GrobalData.prototype.ionic_prefix;
    this.fname = GrobalData.prototype.ionic_fname;
    this.lname = GrobalData.prototype.ionic_lname;
    this.img = GrobalData.prototype.ionic_img;
  }
  ionViewDidLoad(){
    
  }
}
// interface user {
//   id:any;
//   prefix:string;
//   fname:string;
//   lname:string;
//   img:string;
// }
