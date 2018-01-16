import { EventPage } from './../event/event';
import { InterestPage } from './../interest/interest';
import { Profile } from './../../model/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  profile = {} as Profile;
  interest = InterestPage
  event = EventPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth,
  private afDatabase: AngularFireDatabase) {
  }

  createProfile() {
    const cUser = this.afAuth.auth.currentUser.uid;
      this.afDatabase.object(`profile/${cUser}`).set(this.profile)
      .then(() => this.navCtrl.push(this.interest));
   
  }

}
