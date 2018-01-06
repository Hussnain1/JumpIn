import { User } from './../../model/user';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController , AlertController} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  Login = LoginPage;

  user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private loadingCtrl: LoadingController, private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
  }

  register(user: User) {
    if(user.password == user.confirmPass) {
        const loading = this.loadingCtrl.create({
      content : 'Signing you up ...'
    });
    loading.present();
    setTimeout(() => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(
        data => {
          loading.dismiss();
          this.navCtrl.setRoot(this.Login);
          
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
  });
    }, 2000);  
    }
    else {
      const loading = this.loadingCtrl.create({
        content : 'Signing you up ...'
      });
      loading.present();
      const alert = this.alertCtrl.create({
        title : 'Signup failed!',
        message : 'Please put same passwords',
        buttons: ['Try again']
      });
      setTimeout(() => {
        loading.dismiss();
        alert.present();
      }, 2000);
    }
  }
}
