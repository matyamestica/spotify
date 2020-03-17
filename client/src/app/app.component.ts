import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'MUSIFY';
  public user: User;
  public identity;
  public token;

  constructor(){
    this.user = new User('','','','','','ROLE_USER','','','');
  }

}
//lineas de prueba