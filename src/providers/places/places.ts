import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig} from "../../app/app.config";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlacesProvider {
  private url = `${this.config.apiEndpoint}`;

  constructor(public http: HttpClient,@Inject(APP_CONFIG) private config: IAppConfig) {
    console.log('Hello PlacesProvider Provider');
  }
  public getPlacesList(): Observable<any> {
    return this.http.get(`${this.url}/places`,
      {responseType: 'text'}).map(res => {
        console.log(res);
      return JSON.parse(res);
    });
  }
  public addPlaces(addPlaceForm): Observable<any> {

    const options = {
      location: addPlaceForm.location,
      district: addPlaceForm.district,
      state: addPlaceForm.state,
      description: addPlaceForm.description
    };
    return this.http.post(`${this.url}/places`, options).map((res: Response) => res);
  }

}
