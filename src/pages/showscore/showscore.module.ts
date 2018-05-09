import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowscorePage } from './showscore';

@NgModule({
  declarations: [
    ShowscorePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowscorePage),
  ],
})
export class ShowscorePageModule {}
