import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.username = '';
    this.password = '';
  }
  
  showAlert(user: string,pass: string){
    //console.log('User: '+user+'PAss: '+pass);
    if(user != '' && user == 'admin' && pass == 'admin'){
      let alert = this.alertCtrl.create({
        title: 'สวัสดี',
        subTitle: 'ยินดีต้อนรับ ['+user+'] เข้าสู่ระบบประเมิน, สามารถตรวจสอบรายการของท่านได้เลย!',
        buttons: ['รับทราบ']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    }else{
      let alert = this.alertCtrl.create({
        title: 'เข้าสู่ระบบไม่สำเร็จ',
        subTitle: 'กรุณากรอกรหัสเข้าใช้งานให้ถูกต้อง',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
