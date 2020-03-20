import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL } from '../services/global';
import {UserService} from '../services/user.service';
import { Artist } from '../models/artist';

@Component({
    selector: 'artist-add',
    templateUrl: '../views/artist-add.html',
    providers: [UserService]
})

export class ArtistAddComponent implements OnInit{
    public titulo: string;
    public artist: Artist;
    public identity;
    public token;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService   
    ){
        this.titulo = 'Crear nuevo artista';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.artist = new Artist('', '', '');
    }

    ngOnInit(){
        console.log('artist-add.component.ts cargado');

        //Conseguiremos el listado de artistas
    }
}
