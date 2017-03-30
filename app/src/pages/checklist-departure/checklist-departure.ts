import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Checklist } from '../../providers/checklist';

import { ChecklistDeparture } from '../../classes/checklist-departure';

/*
  Generated class for the ChecklistDeparture page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist-departure',
  templateUrl: 'checklist-departure.html',
  providers: [Checklist]
})
export class ChecklistDeparturePage {
  checklist: ChecklistDeparture;

  constructor(public navCtrl: NavController, public navParams: NavParams, public checklistService: Checklist) {
    this.checklist = new ChecklistDeparture();
    this.checklistService.getChecklist("checklistDeparture").then((val) => {
      if (val) {
        this.checklist = val;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistDeparturePage');
  }

  saveChecklist() {
    var currentDate = new Date();
    this.checklist.dateTime = currentDate.toISOString();
    this.checklist.saved = true;

    this.checklistService.saveChecklist("checklistDeparture", this.checklist);
    this.navCtrl.pop();
  }

}
