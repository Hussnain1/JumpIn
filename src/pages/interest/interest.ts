import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the InterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, 
  private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
          message: "Welcome to JumpIn App",
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Could not find authentication details',
          duration: 3000
        }).present();
      }
    })
  }

}
