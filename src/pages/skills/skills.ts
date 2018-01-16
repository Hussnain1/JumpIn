import { sportsSkills } from './../../model/sportsSkill';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseSnapshot } from 'angularfire2/database/interfaces';


@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  basketballSelected = false;
  cricketSelected = false;
  footballSelected = false;
  badmintonSelected = false;
  tennisSelected = false;
  sportsSkill = {} as sportsSkills;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, 
  private afDatabase: AngularFireDatabase) {} 

  ionViewWillLoad() {

    console.log('ionViewDidLoad SkillsPage');
    const cUser = this.afAuth.auth.currentUser.uid;
    var ref =  this.afDatabase.database.ref('sports/');
    return ref.child(`${cUser}`).once('value').then(snap => {
           return this.snapfunction(snap);
          })
    
    /*const prim1 =  this.afDatabase.list(`sports/${cUser}`).snapshotChanges().subscribe( sports => {
    console.log(sports);
    sports.forEach(element => {
        console.log(element.key + " " + element.payload.val());
        this.sportsSelected.push(element.key)
       });
    this.sportsSelected.forEach(selectedSport => {
        return new Promise(selectedSport => {
      })              
    });
    this.sportsSelectedLength = this.sportsSelected.length;        
    console.log(this.sportsSelectedLength);      
    });
    this.sportsSelected.forEach(selectedSport => {
        console.log("Anything: " + selectedSport);
        });*/
  }
 
  snapfunction(snapshot) {
    snapshot.forEach(element => {
      console.log(element.val())
      if(element.key == 'basketball') {
        this.basketballSelected = true;
        console.log(element.key + " " + element.val());
      }
      if(element.key == 'cricket') {
        this.cricketSelected = true;
        console.log(element.key + " " + element.val());
      }
      if(element.key == 'badminton') {
        this.badmintonSelected = true;
        console.log(element.key + " " + element.val());
      }
      if(element.key == 'football') {
        this.footballSelected = true;
        console.log(element.key + " " + element.val());
      }
      if(element.key == 'tennis') {
        this.tennisSelected = true;
        console.log(element.key + " " + element.val());
      }
  });
}

  addSportsSkills() {
    
     this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`sportsSkills/${auth.uid}`).set(this.sportsSkill)
        .then ( data => console.log(data))
        
      })
    
    
    }
    
}
