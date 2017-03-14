import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../providers/user';

/*
  Generated class for the Overview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
  providers: [User]
})
export class OverviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }
}
