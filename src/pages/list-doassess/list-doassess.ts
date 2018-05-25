import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DoassessPage } from '../doassess/doassess';
import { LoginProvider } from './../../providers/login/login';
/**
 * Generated class for the ListDoassessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-doassess',
  templateUrl: 'list-doassess.html',
})
export class ListDoassessPage {
  type: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginCtrl: LoginProvider,public toastCtrl: ToastController) {
    this.type = this.navParams.get('Type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDoassessPage');
    this.loginCtrl.Show_assess2(this.type)
    .then((data: any) => {
      if (data != '') {
        console.log(data);
        this.data = data;
      } else {
        let toast = this.toastCtrl.create({
          message: 'ไม่มีแบบประเมิน',
          duration: 3000
        });
        toast.present();
      }
    });
  }

  doAssess(t:any,f:any){
    console.log('doAssess function');
    this.navCtrl.push(DoassessPage,{
      Teacher_id: t,
      Form_id: f
    });
  }

}
