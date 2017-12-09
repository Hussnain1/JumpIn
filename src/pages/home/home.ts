import { SignUpPage } from './../sign-up/sign-up';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Login = LoginPage;
  SignUp = SignUpPage;
  constructor(public navCtrl: NavController) {

  }

}
