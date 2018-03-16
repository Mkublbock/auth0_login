import { Component } from '@angular/core';
import {AuthService} from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  auth0 : AuthService;
  constructor(auth0 : AuthService){
    this.auth0=auth0;
    this.auth0.handleAuthentication();
  }

  getUserInfo() {
    this.auth0.getProfile((error,profile)=>{
      console.log(error);
      console.log(profile);
      console.log(this.auth0.userProfile.picture);
    } )
  }
}
