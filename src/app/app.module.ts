import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {APP_CONFIG, AppConfig} from "./app.config";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatabaseProvider } from '../providers/database/database';
import {SQLite} from '@ionic-native/sqlite';
import {PlacesPageModule} from "../pages/places/places.module";
import {PlacesDetailPageModule} from "../pages/places-detail/places-detail.module";
import { AddPlacesPageModule} from "../pages/add-places/add-places.module";
import { PlacesListPageModule } from "../pages/places-list/places-list.module";

import {TabsPageModule} from "../pages/tabs/tabs.module";
import { Toast } from '@ionic-native/toast';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import {PlacesProvider} from "../providers/places/places";
@NgModule({
  declarations: [
    MyApp,
    HomePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlacesPageModule,
    PlacesDetailPageModule,
    AddPlacesPageModule,
    PlacesListPageModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage],
  providers: [
    StatusBar,
    SQLite,
    Toast,
    Camera,
    { provide: APP_CONFIG, useValue: AppConfig },
    ImagePicker,
    NativeStorage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    PlacesProvider
  ]
})
export class AppModule {}
