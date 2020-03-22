import { GLOBAL } from './../services/global';
import { Song } from './../models/song';
import { Component, OnInit} from '@angular/core';



@Component({
    selector: 'player',
    template: `
      <div class="album-image">
        <span *ngIf="song.album">
          <img if="play-image-album" src="{{url + 'get-image-album/'+song.album.image}}"/>
        </span>
        <span *ngIf="!song.album">
          <img if="play-image-album" src="assets/images/default.jpg"/>>

        </span>

      </div>
`


})

export class PlayerComponent implements OnInit{
  public url: string;
  public song;

  constructor(){
    this.url = GLOBAL.url;
    this.song = new Song("1","","","","");
  }




  ngOnInit(){

    console.log('player cargado');
  }
}
