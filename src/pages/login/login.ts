import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../model/user';
import { NgForm } from '@angular/forms';
import { AuthJumpInService } from './../../services/authJService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { InterestPage } from '../interest/interest';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  SignUp = SignUpPage;
  interestPage = InterestPage;
  profile = UserProfilePage;

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth:AngularFireAuth,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  onSignIn(user: User) {
    const loading = this.loadingCtrl.create({
      content : 'Signing you in ...'
    });
    loading.present();
    setTimeout(() => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(
        data => {
          loading.dismiss();
          this.navCtrl.setRoot(this.profile);
        })
      .catch(
        error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title : 'Signin failed!',
          message : error.message,
          buttons: ['Ok']
        });
        alert.present();
  });
    }, 2000); 
  }
}
