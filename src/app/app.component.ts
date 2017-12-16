import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyBkviltfgacaUayDtk3hBNcX6hMakEF-50",
      authDomain: "jumpin-61c7f.firebaseapp.com",
      databaseURL: "https://jumpin-61c7f.firebaseio.com",
      projectId: "jumpin-61c7f",
      storageBucket: "jumpin-61c7f.appspot.com",
      messagingSenderId: "513942448011"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = HomePage;
        unsubscribe();
      } else { 
        this.rootPage = LoginPage;
        unsubscribe();
      }
    });
  }
}

