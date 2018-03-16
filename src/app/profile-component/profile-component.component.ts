import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(profile);
        console.log(err);
      });
    }
  }

}
