import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {PlacesPage} from "../places/places";
import {AddPlacesPage} from "../add-places/add-places"


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1;
  tab2;
  tab3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = PlacesPage;
    this.tab3 = AddPlacesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
