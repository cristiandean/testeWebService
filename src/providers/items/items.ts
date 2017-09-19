import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsProvider {

  constructor(public http: Http) {
    console.log('Hello ItemsProvider Provider');
  }


  getAll(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append("Content-Type", "application/json" );

    return this.http.post("http://timi-cmms-api.azurewebsites.net/api/Route/GetAvailable", "'6C7E'", {headers:headers});
  }

}
