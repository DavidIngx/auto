import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { ModalController, MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authServ: AuthService,
              public router: Router,
              private model: ModalController,
              private menu: MenuController,
              private nav: NavController) { }

  ngOnInit() {
  }


  onSubmitLogin() {

    this.authServ.login(this.email, this.password).then(res => {
      this.nav.navigateRoot(['/tabs/tab1']);
   
    }).catch(err => alert('Datos incorrectos'));

  }

}
