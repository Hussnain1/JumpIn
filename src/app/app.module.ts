//import { AuthJumpInService } from './../services/authJService';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //AuthJumpInService
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}