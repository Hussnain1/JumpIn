import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyCKmZgh10PSDXp9-vXDWirXPc2c9Wv6Plw",
      authDomain: "user-authorization-8fe02.firebaseapp.com",
      databaseURL: "https://user-authorization-8fe02.firebaseio.com",
      projectId: "user-authorization-8fe02",
      storageBucket: "user-authorization-8fe02.appspot.com",
      messagingSenderId: "259703394889"
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

