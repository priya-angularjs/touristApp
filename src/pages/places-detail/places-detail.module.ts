import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesDetailPage } from './places-detail';

@NgModule({
  declarations: [
    PlacesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesDetailPage),
  ],
})
export class PlacesDetailPageModule {}
