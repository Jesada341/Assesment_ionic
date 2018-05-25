import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
// import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { GrobalData } from '../grobal-data';

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
    public navCtrl: NavController, public navParams: NavParams, public loginCtrl: LoginProvider, public toastCtrl: ToastController) {
    
    }

  showAlert(user: string, pass: string) {
    this.loginCtrl.doLogin(user, pass)
      .then((data: any) => {
        if (data != '') {
          let toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000
          });
          toast.present();
          console.log(data);
          
          GrobalData.prototype.ionic_prefix = data[0].ionic_prefix;
          GrobalData.prototype.ionic_fname = data[0].ionic_fname;
          GrobalData.prototype.ionic_lname = data[0].ionic_lname;
          GrobalData.prototype.ionic_img = data[0].ionic_img;
          console.log(GrobalData.prototype.ionic_prefix + " "+GrobalData.prototype.ionic_fname+ " "+GrobalData.prototype.ionic_lname+" "+GrobalData.prototype.ionic_img);
          
          this.navCtrl.setRoot(HomePage);
        } else {
          let toast = this.toastCtrl.create({
            message: 'Login fail!',
            duration: 3000
          });
          toast.present();
        }
      });

  }

}
