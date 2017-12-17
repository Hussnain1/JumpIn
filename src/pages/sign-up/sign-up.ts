import { NgForm } from '@angular/forms/';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , AlertController} from 'ionic-angular';
import { AuthJumpInService } from './../../services/authJService';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  Login = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthJumpInService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  onSignUp(form: NgForm) {
   /* const loading = this.loadingCtrl.create({
      content : 'Signing you up ...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(
        data => {
          loading.dismiss();
        })
      .catch(
        error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title : 'Signup failed!',
          message : error.message,
          buttons: ['Ok']
        });
        alert.present();
  });*/
}

}
