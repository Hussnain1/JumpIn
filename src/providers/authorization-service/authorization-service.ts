import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthorizationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthorizationServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthorizationServiceProvider Provider');
  }
  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

}
