import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AuthService} from './auth-service.service';
import { CallbackComponentComponent } from './callback-component/callback-component.component';
import { ProfileComponent } from './profile-component/profile-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
