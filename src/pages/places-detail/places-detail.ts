import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/database";
/**
 * Generated class for the PlacesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places-detail',
  templateUrl: 'places-detail.html',
})
export class PlacesDetailPage {
  places: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: DatabaseProvider) {

    this.places = this.navParams.data.item;
    console.log(this.navParams.data.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesDetailPage');
  }
  favorite(places){
    console.log("fav list added");
  }


}
