import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import {FormBuilder, FormGroup} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-places-list',
  templateUrl: 'places-list.html',
})
export class PlacesListPage {
  placesList: any;
  detailPlaceList: any;
  placesListForm: FormGroup;
  location;
  listPage: boolean = true;
  detailPage: boolean = false;
  noDataFound: boolean = true;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private platform: Platform,
              public navParams: NavParams,
              private sqlite: SQLite,
              private toast: Toast) {
    this.placesListForm = this.fb.group({
      id: [''],
      location: [''],
      district: [''],
      state: [''],
      description: ['']
    });
    /*this.placesList =[];
    this.placesList.push({
      location: 'salem', district: 'salem', state: 'tamilnadu',
      description: 'salem is famous for mangoes.it is also called as mango city'},
      {
        location: 'Erode', district: 'Erode', state: 'tamilnadu',
        description: 'Erode is famous for turmeric.'});*/
     this.getList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesListPage');
  }
  getList(){
    if (this.platform.is('cordova')) {
      this.sqlite.create({
        name: 'touristdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        db.executeSql('SELECT * FROM place ORDER BY id DESC', {})
          .then(res => {
            if (res.rows.length > 0) {
              this.placesList =[];
              this.noDataFound = false;
              for (let i = 0; i < res.rows.length; i++) {
                this.placesList.push({ id: res.rows.item(i).id, location: res.rows.item(i).place, district: res.rows.item(i).district, state: res.rows.item(i).state,
                  description: res.rows.item(i).description, image: 'data:image/jpeg;base64,'+res.rows.item(i).image});
              }
            }
            else {
              this.noDataFound = true;
            }
          })
          .catch(e => {
            console.log(e);
            this.toast.show('Data not saved', '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });


      });
    } else {

      console.log("sqlite not connected");
    }
  }
  updatePlaces(placesListForm) {
    this.sqlite.create({
      name: 'touristdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE place SET place=?,district=?,state=?,description=? WHERE rowid=?',
        [placesListForm.value.location,placesListForm.value.district,placesListForm.value.state,
          placesListForm.value.description,placesListForm.value.id])
        .then(res => {
          this.getList();
          console.log(res);
          this.toast.show('Data updated'+ placesListForm.value.id, '5000', 'center').subscribe(
            toast => {
              // this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  deletePlaces(id){

      this.sqlite.create({
        name: 'touristdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM place WHERE rowid=?', [id])
          .then(res => {
            this.toast.show('Data deleted', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();
              }
            );
            console.log(res);
            this.getList();
          })
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
  }
  itemTapped(place){
    this.detailPlaceList = [];
    this.listPage = false;
    this.detailPage = true;
    console.log(place);
    this.detailPlaceList = place;

  }

}
