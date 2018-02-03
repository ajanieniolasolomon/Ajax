import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {
  authState: any = null;
  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }
   emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     
  }
  signOut(): void {
    this.afAuth.auth.signOut();
   
  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
 get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }


}
