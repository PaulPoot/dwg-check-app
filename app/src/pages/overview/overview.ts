import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChecklistArrivalPage } from '../checklist-arrival/checklist-arrival';
import { ChecklistDeparturePage } from '../checklist-departure/checklist-departure';
import { ChecklistLocomotivePage} from '../checklist-locomotive/checklist-locomotive';

import { User } from '../../providers/user';
import { Checklist } from '../../providers/checklist';

/*
  Generated class for the Overview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
  providers: [User, Checklist]
})
export class OverviewPage {
  checklistMap = {
    arrival: ChecklistArrivalPage,
    departure: ChecklistDeparturePage,
    locomotive: ChecklistLocomotivePage,
  }

  checklistArrival: null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: User, private checklistService: Checklist) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  ionViewWillEnter() {
    this.checklistService.getChecklist("checklistArrival").then((val) => {
      this.checklistArrival = val;
    })
  }

  openChecklist(checklist) {
    this.navCtrl.push(checklist);
  }
}
