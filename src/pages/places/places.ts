import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesDetailPage} from "../places-detail/places-detail";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  images: any;

  constructor(public navCtrl: NavController, private platform: Platform,
              public navParams: NavParams,  private sqlite: SQLite,
              private toast: Toast) {

    if (this.platform.is('cordova')) {
         this.sqlite.create({
                name: 'ionicdb.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                db.executeSql('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, name TEXT)', {})
                  .then(res => console.log('Table created'))
                  .catch(e => console.log(e));

           db.executeSql('INSERT INTO user VALUES(?,?)',['1','priya'])
             .then(res => {
               console.log(res);
               console.log("Data inserted");
               this.toast.show('Data saved', '5000', 'center').subscribe(
                 toast => {
                   console.log('Data saved');
                   this.navCtrl.popToRoot();
                 }
               );
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


    this.images = [
      { url: 'assets/imgs/img1.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
      { url: 'assets/imgs/img2.jpg', place:'Delhi', description:'Every year on the Independence day of India (15 August),' +
      ' the Prime Minister hoists the Indian "tricolour flag" at the main gate of the fort' +
      ' and delivers a nationally broadcast speech from its ramparts here. ' +
      ' Red Fort is a historic fort in the city of Delhi in India.', state: 'Delhi'},
      { url: 'assets/imgs/img3.jpg', place:'Mumbai', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces',state: 'Mumbai'},
      { url: 'assets/imgs/img4.jpg', place:'Madurai', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces',state: 'Tamilnadu'},
      { url: 'assets/imgs/img5.jpg', place:'Chennai', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces',state: 'Tamilnadu'},
      { url: 'assets/imgs/img6.jpg', place:'Chennai', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Tamilnadu'},
      { url: 'assets/imgs/img7.jpg', place:'Rameswaram', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Tamilnadu'},
      { url: 'assets/imgs/img8.jpg', place:'kerala', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Kerala'},
      { url: 'assets/imgs/img9.jpg', place:'Kerala', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Kerala'},
      { url: 'assets/imgs/img10.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
      { url: 'assets/imgs/img11.jpg', place:'karnataka', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces',state: 'Karnataka'},
      { url: 'assets/imgs/img12.jpg', place:'Delhi', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Delhi'},
      { url: 'assets/imgs/img13.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
      { url: 'assets/imgs/img14.jpg', place:'Delhi',description:'Ambavilas Palace, otherwise known as the Mysore' +
      ' Palace is a historical palace and a royal residence at Mysore' +
      ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
      ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
      'eastward.  Mysore is commonly described as the City of Palaces',state: 'Delhi'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');

  }
  onInput(event) {
    const val = event.target.value;


    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.images = this.images.filter((place) => {
        return (place.place.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.images = [
        { url: 'assets/imgs/img1.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
        { url: 'assets/imgs/img2.jpg', place:'Delhi', description:'Every year on the Independence day of India (15 August),' +
        ' the Prime Minister hoists the Indian "tricolour flag" at the main gate of the fort' +
        ' and delivers a nationally broadcast speech from its ramparts here. ' +
        ' Red Fort is a historic fort in the city of Delhi in India.', state: 'Delhi'},
        { url: 'assets/imgs/img3.jpg', place:'Mumbai', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces',state: 'Mumbai'},
        { url: 'assets/imgs/img4.jpg', place:'Madurai', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces',state: 'Tamilnadu'},
        { url: 'assets/imgs/img5.jpg', place:'Chennai', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces',state: 'Tamilnadu'},
        { url: 'assets/imgs/img6.jpg', place:'Chennai', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Tamilnadu'},
        { url: 'assets/imgs/img7.jpg', place:'Rameswaram', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Tamilnadu'},
        { url: 'assets/imgs/img8.jpg', place:'kerala', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Kerala'},
        { url: 'assets/imgs/img9.jpg', place:'Kerala', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Kerala'},
        { url: 'assets/imgs/img10.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
        { url: 'assets/imgs/img11.jpg', place:'karnataka', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces',state: 'Karnataka'},
        { url: 'assets/imgs/img12.jpg', place:'Delhi', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Delhi'},
        { url: 'assets/imgs/img13.jpg', place:'Mysore', description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces', state: 'Karnataka'},
        { url: 'assets/imgs/img14.jpg', place:'Delhi',description:'Ambavilas Palace, otherwise known as the Mysore' +
        ' Palace is a historical palace and a royal residence at Mysore' +
        ' in the southern Karnataka state of India. It is the official residence of the Wadiyar dynasty and ' +
        ' the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills ' +
        'eastward.  Mysore is commonly described as the City of Palaces',state: 'Delhi'}
      ];
    }
  }
  onCancel(event) {

    this.images = [
      { url: 'assets/imgs/img1.jpg', place:'Mysore'},
      { url: 'assets/imgs/img2.jpg', place:'Delhi'},
      { url: 'assets/imgs/img3.jpg', place:'Mumbai'},
      { url: 'assets/imgs/img4.jpg', place:'Madurai'},
      { url: 'assets/imgs/img5.jpg', place:'Chennai'},
      { url: 'assets/imgs/img6.jpg', place:'Chennai'},
      { url: 'assets/imgs/img7.jpg', place:'Rameswaram'},
      { url: 'assets/imgs/img8.jpg', place:'kerala'},
      { url: 'assets/imgs/img9.jpg', place:'Kerala'},
      { url: 'assets/imgs/img10.jpg', place:'Mysore'},
      { url: 'assets/imgs/img11.jpg', place:'karnataka'},
      { url: 'assets/imgs/img12.jpg', place:'Delhi'},
      { url: 'assets/imgs/img13.jpg', place:'Mysore'},
      { url: 'assets/imgs/img14.jpg', place:'Delhi'}
    ];

  }
  itemTapped(event, item) {
    console.log(item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PlacesDetailPage, {
      item: item
    });
  }



}
