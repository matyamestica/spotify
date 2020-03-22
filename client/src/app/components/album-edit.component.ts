import { UploadService } from './../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { GLOBAL } from '../services/global';
import {UserService} from '../services/user.service';
import {AlbumService} from '../services/album.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';


@Component({
    selector: 'artist-edit',
    templateUrl: '../views/album-add.html',
    providers: [UserService, AlbumService, UploadService]
})

export class AlbumEditComponent implements OnInit{
    public titulo: string;
    public album: Album;
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public is_edit;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _albumService: AlbumService,
        private _uploadService: UploadService
    ){
        this.titulo = 'Editar album';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.album = new Album('', '', '2017', '', '');
        this.is_edit = true;
    }

    ngOnInit(){
        console.log('album-edit.component.ts cargado');
        //conseguir el album

        this.getAlbum();
    }

    getAlbum(){
      this._route.params.forEach((params: Params) =>{
        let id = params['id'];
        this._albumService.getAlbum(this.token, id).subscribe(
          response => {
            if(!response.album){
              this._router.navigate(['/']);
            }else{
              this.album = response.album;
            }
          },
          error => {
            var errorMessage = <any>error;
            if(errorMessage != null){
              var body = JSON.parse(error._body);

              console.log(error);
            }
          }

        )
      });
    }

    onSubmit(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];

            this._albumService.editAlbum(this.token,id, this.album).subscribe(
            response => {
                //this.album = response.album;
                //ESTO SE CAMBIO PORQUE ARROJABA ERROR EN LA CONSOLA DE CYGWIN, ORIGINALMENTE EL OBJETO ERA ARTIST
                if(!response.album){
                    this.alertMessage = 'Error en el servidor';
                }else{
                    this.alertMessage = 'El album se ha actualizado correctamente';
                    if(!this.filesToUpload){
                        //redirigir
                        this._router.navigate(['/artista', response.album.artist]);
                    }else{
                      //subir la imagen
                        this._uploadService.makeFileRequest(this.url+'upload-image-album/'+id, [], this.filesToUpload, this.token,'image')
                        .then(
                            (result) => {
                              this._router.navigate(['/artista', response.album.artist]);
                            },
                            (error) => {
                              console.log(error);
                            }
                        );
                    }


                }
            },
                        error => {
                            var errorMessage = <any>error;

                            if(errorMessage != null){
                            var body = JSON.parse(error._body);
                            this.alertMessage = body.message;

                            console.log(error);
                            }
                        }
            );

        });

    }
    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;

    }
}
