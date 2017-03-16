import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChecklistArrivalPage } from '../checklist-arrival/checklist-arrival';
import { ChecklistDeparturePage } from '../checklist-departure/checklist-departure';
import { ChecklistLocomotivePage} from '../checklist-locomotive/checklist-locomotive';

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

  checklistMap = {
    arrival: ChecklistArrivalPage,
    departure: ChecklistDeparturePage,
    locomotive: ChecklistLocomotivePage,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: User) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  openChecklist(checklist) {
    this.navCtrl.push(checklist);
  }
}
