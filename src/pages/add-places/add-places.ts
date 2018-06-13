import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import {FormBuilder, FormGroup} from "@angular/forms";
import { PlacesListPage} from "../places-list/places-list"
import {PlacesProvider} from "../../providers/places/places";
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-places',
  templateUrl: 'add-places.html',
})
export class AddPlacesPage {

    // options: ImagePickerOptions;
   addPlaceForm : FormGroup;
   imageData;
   imageUrl;
   thumbnailview: boolean = false;
   // placesList: any;

  constructor(public navCtrl: NavController,private camera: Camera,
              private platform: Platform,private sqlite: SQLite,
              public actionSheetCtrl: ActionSheetController,
              private formBuilder: FormBuilder,
              private toast: Toast,
              public placesService: PlacesProvider) {

    this.addPlaceForm = this.formBuilder.group({
      location: [''],
      district: [''],
      state: [''],
      description: ['']
    });
    if (this.platform.is('cordova')) {
      this.sqlite.create({
        name: 'touristdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS place(id INTEGER PRIMARY KEY AUTOINCREMENT , place TEXT, district TEXT, state TEXT, description VARCHAR, image BLOB)', {})
          .then(res => {
            this.toast.show('Table Created', '5000', 'center').subscribe(
              toast => {
                this.navCtrl.popToRoot();
              }
            );
          })
          .catch(e => {
            this.toast.show('Table not Created', '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacesPage');
  }
  addPlace(addPlaceForm) {

      if (this.platform.is('cordova')) {
        this.sqlite.create({
          name: 'touristdb.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO place (place,district,state,description,image) VALUES(?,?,?,?,?)', [addPlaceForm.value.location, addPlaceForm.value.district,
          addPlaceForm.value.state,
          addPlaceForm.value.description, this.imageUrl])
          .then(res => {
            this.addPlaceForm.reset();
            this.thumbnailview = false;
            // this.getPlacesList();
            console.log(res);
            console.log("Data inserted");
            this.toast.show("Data inserted", '5000', 'center').subscribe(
              toast => {
                console.log('Data saved');
                // this.navCtrl.popToRoot();
              }
            );
          })
          .catch(e => {
            console.log(e);
            this.toast.show(e.message, '5000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });
      });

    }
  }
  placeList(){
    this.navCtrl.push(PlacesListPage);
  }
  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take Picture',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then((imageData) => {
              this.imageData = 'data:image/jpeg;base64,' + imageData;
              this.imageUrl = imageData;
              this.thumbnailview = true;
            }, (err) => {
              this.thumbnailview = false;
              // Handle error
            });
          }
        },
        {
          text: 'Photo from Gallery',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum: false
            };
            this.camera.getPicture(options).then((imageData) => {

              this.imageData = 'data:image/jpeg;base64,' + imageData;
              this.imageUrl = imageData;
              this.thumbnailview = true;
            }, (err) => {
              // Handle error
              this.thumbnailview = false;
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
