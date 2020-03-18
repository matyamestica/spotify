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
  public user_register: User;
  public identity;
  public token;
  public errorMessage;

  constructor(
    private _userService: UserService

  ) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '', '', '');
    this.user_register = new User('', '', '', '', '', 'ROLE_USER', '', '', '');
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
<<<<<<< HEAD
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
=======
    this.token = this._userService.getToken;

    console.log(this.identity);
    console.log(this.token);

>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
  }

  public onSubmit() {
    console.log(this.user);
<<<<<<< HEAD
    //Conseguir los datos del usuario identificado
=======
    //Conseguir datos del usuario identificado
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
    this._userService.signup(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if(!this.identity._id){
<<<<<<< HEAD
          alert("El usuario no está correctamente identificado");
        }else{
          //Crear elemento en el localstorage para tener al usuario en sesión
            localStorage.setItem('identity', JSON.stringify(identity));
          //Conseguir el token para enviarselo a cada petición http
                    this._userService.signup(this.user, 'true').subscribe(
                      response => {
                        let token = response.token;
                        this.token = token;
                
                        if(this.token.length <= 0){
                          alert("El token no se ha generado correctamente");
                        }else{
                          //Crear elemento en el localstorage para tener token disponible
                          localStorage.setItem('token', token);

                            console.log(token);
                            console.log(identity);
                
                        }
                      },
                      error => {
                        var errorMessage = <any>error;
                        if(errorMessage != null){
                          var body = JSON.parse(error._body);
                          this.errorMessage = body.message;
                          console.log(error);
                        }
                      }
                    );
=======
          alert("El usuario no esta correctamente identificado");
        }else{
          //Crear elemento en el local storage para tener al usuario en sesion

          localStorage.setItem('identity',JSON.stringify(identity));

          //conseguir el tokken para enviarselo a la peticion http

          this._userService.signup(this.user, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;

              if(this.token.length <= 0){
                alert("El token no se ha generado");
              }else{
                //Crear elemento en el local storage para tener el token disponible
                localStorage.setItem('token',token);

                console.log(token);
                console.log(identity);

              }

            },
            error => {
              var errorMessage = <any>error;

              if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;

                console.log(error);
              }
            }
          );
        }
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b

        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
<<<<<<< HEAD
=======

>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
          console.log(error);
        }
      }
    );
  }
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }
<<<<<<< HEAD
  onSubmitRegister(){
    console.log(this.user_register);
  }
=======
>>>>>>> ba80937d2d36e03da60616c8ebf948053455545b
}
