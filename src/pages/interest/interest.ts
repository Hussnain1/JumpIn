import { SkillsPage } from './../skills/skills';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Sports } from '../../model/sports';
import { EventPage } from '../event/event';

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
  private afDatabase: AngularFireDatabase, private toast: ToastController) {
  }


  sports = {} as Sports;
  event = EventPage;

basketballFunction(e:any){
    if(e.checked == true)  {
      console.log(e.checked);
    }
}

cricketFunction(e:any){
  if(e.checked == true)  {
    console.log(e.checked);
  }
}

footballFunction(e:any){
  if(e.checked == true)  {
    console.log(e.checked);
  }
}

badmintonFunction(e:any){
  if(e.checked == true)  {
    console.log(e.checked);
  }
}

tennisFunction(e:any){
  if(e.checked == true)  {
    console.log(e.checked);
  }
}


addSports() {

  this.afAuth.authState.take(1).subscribe(auth => {
    this.afDatabase.object(`sports/${auth.uid}`).set(this.sports)
    .then ( data => this.navCtrl.setRoot(this.event))
    
  })


}


  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
          message: "Welcome to JumpIn App",
          duration: 3000
        }).present();

        console.log(data.uid);
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
