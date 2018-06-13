import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  sliders: any;
  constructor(public navCtrl: NavController) {
    this.sliders = [
      {
        title: "Welcome to the Tourist App!",
        description: "The <b>Tourist App</b> is guide app for Indian tourist" +
        " locations. It shows detailed information about each and every Indian tourist locations",
        image: "assets/imgs/tajmahal.jpg",
      },
      {
        title: "Tourist Places Today?",
        description: "<b>Travel</b>  while you're still young. Lose yourself to find your own self. " +
        "Live like there's no tomorrow. And whatever you'll explore today will last a lifetime with you. ",
        image: "assets/imgs/paris_gate.jpg",
      },
      {
        title: "Tourist Places !",
        description: "Discover best tourist places to visit in <b>India</b> - travel guide," +
        " sightseeing attractions with itinerary, trip duration, weather, best season & tourist map..",
        image: "assets/imgs/thanjaiTemple.jpg",
      }
    ];

  }
  slideChanged() {
    this.slides.getActiveIndex();
   /* if (currentIndex == 3) {
      this.slides.stopAutoplay();
    }*/
  }

}
