import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongsService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://itunes.apple.com/in/rss/topalbums/limit=100/json';

  getData(){
  	return this.http.get(this.configUrl);
  }

  getSongsCard(){

  	this.getData().subscribe(data => {
  		console.log(data);
  	})
  }
	
}
