import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Song } from 'app/models/song';

@Injectable()
export class SongService {
  public url: string;

  constructor(private _http: Http) {
   this.url = GLOBAL.url;
  }

  addSong(token, song: Song){
   let params = JSON.stringify(song);
   let headers = new Headers({
       'Content-Type':'application/json',
       'Authorization':token
   });

        return this._http.post(this.url+'song', params, {headers: headers})
                        .map(res => res.json());

        }

}


