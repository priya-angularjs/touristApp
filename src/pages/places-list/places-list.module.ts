import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesListPage } from './places-list';

@NgModule({
  declarations: [
    PlacesListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesListPage),
  ],
})
export class PlacesListPageModule {}
