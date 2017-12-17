import firebase from 'firebase';

export class AuthJumpInService {
    signup(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
}