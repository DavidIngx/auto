import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router'
import { ToastController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth,
              private router: Router,
              public toastController: ToastController,
              private nav: NavController) { }

              login(email: string, password: string) {

                return new Promise((resolve, rejected) => {
                  this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res => {
                    resolve(res);
                  }).catch(err => rejected(err));
                });
              }

}
