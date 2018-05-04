import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.username = '';
    this.password = '';
  }
  
  showAlert(user: string,pass: string){
    //console.log('User: '+user+'PAss: '+pass);
    if(user != '' && user == 'admin'){
      let alert = this.alertCtrl.create({
        title: 'สวัสดี',
        subTitle: 'ยินดีต้อนรับ ['+user+'] เข้าสู่ระบบประเมิน, สามารถตรวจสอบรายการของท่านได้เลย!',
        buttons: ['รับทราบ']
      });
      alert.present();
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
