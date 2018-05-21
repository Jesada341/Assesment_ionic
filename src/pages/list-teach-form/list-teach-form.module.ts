import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTeachFormPage } from './list-teach-form';

@NgModule({
  declarations: [
    ListTeachFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTeachFormPage),
  ],
})
export class ListTeachFormPageModule {}
