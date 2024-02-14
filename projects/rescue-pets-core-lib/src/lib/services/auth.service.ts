import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _auth: Auth, private _route: Router) { }

  async register(email: string, passwd: string): Promise<boolean> {
    try {
      let userCredential: UserCredential = await createUserWithEmailAndPassword(this._auth, email, passwd);
      if(userCredential) this._route.navigate(['/login']);
      return true;
    } catch(error: any) {
      console.log(error);
      return false;
    }
  }

  async loginWithEmail(email: string, passwd: string): Promise<boolean> {
    try {
      let userCredential: UserCredential = await signInWithEmailAndPassword(this._auth, email, passwd);
      if(userCredential) this._route.navigate(['/home']);
      return true;
    } catch(error: any) {
      console.log(error);
      return false;
    }
  }

  async loginWithGoogle(): Promise<boolean> {
    try {
      let userCredential = await signInWithPopup(this._auth, new GoogleAuthProvider());
      if(userCredential) this._route.navigate(['/home']);
      return true;
    } catch(error: any) {
      console.log(error);
      return false;
    }
  }

  async logout(): Promise<boolean> {
    try {
      await signOut(this._auth);
      return true;
    } catch(error: any) {
      console.log(error);
      return false;
    }
  }

  get currentUser(): User | null {
    return this._auth.currentUser;
 }

 isSessionActive(): boolean {
  return this.currentUser != null;
  }
}
