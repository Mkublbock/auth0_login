import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallbackComponentComponent} from './callback-component/callback-component.component';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile-component/profile-component.component';

const routes: Routes = [
  {path : 'callback', component : CallbackComponentComponent},
  {path : 'home' , component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
