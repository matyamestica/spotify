import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
<<<<<<< HEAD

=======
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
  public identity;
  public token;
  public url: string;

 constructor(private _http: Http) {
   this.url = GLOBAL.url;
  }

  signup(user_to_login, gethash = null) {
    if(gethash != null){
      user_to_login.gethash = gethash;
    }

    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url + 'login', params, {headers: headers})
                     .map(res => res.json());
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined"){
<<<<<<< HEAD
        this.identity = identity;
    }else{
      this.identity = null;

=======
      this.identity = identity;
    }else{
      this.identity = null;
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
    }
    return this.identity;
  }
  getToken(){
    let token = localStorage.getItem('token');

    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
<<<<<<< HEAD

=======
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
    return this.token;

  }

}
