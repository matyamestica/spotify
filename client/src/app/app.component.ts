import { User } from './models/user';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title = 'MUSIFY';
  public user: User;
  public identity;
  public token;

  constructor(
  	private _userService: UserService

  ){
    this.user = new User('','','','','','ROLE_USER','','','');
  }

  ngOnInit(){
  	var texto = this._userService.signup();
  	console.log(texto);

  }

  public onSubmit(){
  	console.log(this.user);
  }
}
