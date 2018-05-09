import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ShowreportallPage } from '../pages/showreportall/showreportall';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { FormPage } from '../pages/form/form';
import { ShowassessPage } from '../pages/showassess/showassess';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าแรก', component: HomePage,icon: 'home' },
      { title: 'รายการ', component: ListPage,icon: 'checkmark-circle-outline' },
      { title: 'รายงาน',component: ShowreportallPage,icon: 'clipboard'},
      { title: 'บัญชี',component: AccountPage,icon: 'person'},
      { title: 'ประเมิน',component: FormPage,icon: 'ios-book'},
      { title: 'รายการประเมิน',component: ShowassessPage,icon: 'list-box'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
