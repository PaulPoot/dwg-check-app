import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Checklist } from '../../providers/checklist';

import { ChecklistLocomotive } from '../../classes/checklist-locomotive';

/*
  Generated class for the ChecklistDeparture page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist-locomotive',
  templateUrl: 'checklist-locomotive.html',
  providers: [Checklist]
})
export class ChecklistLocomotivePage {
  checklist: ChecklistLocomotive;

  constructor(public navCtrl: NavController, public navParams: NavParams, public checklistService: Checklist) {
    this.checklist = new ChecklistLocomotive();
    this.checklistService.getChecklist("checklistLocomotive").then((val) => {
      if (val) {
        this.checklist = val;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistLocomotivePage');
  }

  saveChecklist() {
    var currentDate = new Date();
    this.checklist.dateTime = currentDate.toISOString();
    this.checklist.saved = true;

    this.checklistService.saveChecklist("checklistLocomotive", this.checklist);
    this.navCtrl.pop();
  }

}
