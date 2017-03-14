import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../providers/user';

import { OverviewPage } from '../overview/overview';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
    providers: [User]
})
export class LoginPage {
  user = {
    username: null,
    password: null,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    if (this.user.username && this.user.password) {
      this.userService.createUser(this.user);
    }
  }

  login() {
    if (this.user.username && this.user.password) {
      this.userService.loginUser(this.user).then((result) => {
        if (result == true) {
          this.navCtrl.setRoot(OverviewPage);
          
        }
      });
    }
  }
}
