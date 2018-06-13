import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacesPage } from './add-places';

@NgModule({
  declarations: [
    AddPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacesPage),
  ],
})
export class AddPlacesPageModule {}
