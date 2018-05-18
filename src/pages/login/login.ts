import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { IonicPage, NavController, NavParams} from 'ionic-angular';
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
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private alertCtrl: AlertController
    , public loginCtrl: LoginProvider
  ) {
  }

  showAlert(user: string, pass: string) {
    this.loginCtrl.doLogin(user, pass)
      .then((data: any) => {
        if (data != '') {
          let alert = this.alertCtrl.create({
            subTitle: 'เข้าสู่ระบบสำเร็จ!',
            buttons: ['รับทราบ']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage, {user_data: data});
        } else {
          let alert = this.alertCtrl.create({
            title: 'เข้าสู่ระบบไม่สำเร็จ',
            subTitle: 'กรุณากรอกรหัสเข้าใช้งานให้ถูกต้อง',
            buttons: ['รับทราบ']
          });
          alert.present();
        }
      });

  }

}
