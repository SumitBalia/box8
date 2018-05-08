import { Component, OnInit } from '@angular/core';
import {SongsService} from '../songs.service';
declare var jQuery:any;
declare var $ :any;
declare var fadeIn :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
items: any;
songs: any;

  constructor(private songsService: SongsService) { }

  ngOnInit():void {



  	this.songsService.getData().subscribe(data => {
           this.items = data;
           this.songs = this.items.feed.entry;
           // console.log(this.songs);

      });
  	$(document).ready(function () {
  		fadeIn();
  	})
  	

  }

}
