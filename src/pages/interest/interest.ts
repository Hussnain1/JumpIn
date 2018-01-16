import { SkillsPage } from './../skills/skills';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Sports } from '../../model/sports';

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
  private afDatabase: AngularFireDatabase, private loadingCtrl: LoadingController) {
  }

  sports = {} as Sports;
  skills = SkillsPage;

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
  const loading = this.loadingCtrl.create({
    content : 'Saving sports preferences ...'
  });
  loading.present();
  setTimeout(() => {
  this.afAuth.authState.take(1).subscribe(auth => {
    this.afDatabase.object(`sports/${auth.uid}`).set(this.sports)
    .then ( data => this.navCtrl.setRoot(this.skills))
    })
    loading.dismiss();
  }, 2000); 
  }
}
