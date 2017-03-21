import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Checklist } from '../../providers/checklist';

/*
  Generated class for the ChecklistArrival page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist-arrival',
  templateUrl: 'checklist-arrival.html',
  providers: [Checklist]

})
export class ChecklistArrivalPage {
  checklist = {
    allWagonsArrived: false,
    noExtraWagons: false,
    noWagonsBlueLetter: false,
    noWagonsRedLetter: false,
    wagonDatesNotExpired: false,
    noWagonTanksDamaged: false,
    tankDatesNotExpired: false,
    allLidsClosed: false,
    noLidsLeak: false,
    noLidsDamaged: false,
    wagonNumbers: String,
    dateTime: null,
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public checklistService: Checklist) {
    this.checklistService.getChecklist("checklistArrival").then((val) => {
      this.checklist = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistArrivalPage');
  }

  saveChecklist() {
    var currentDate = new Date();
    this.checklist.dateTime = currentDate.toISOString();

    this.checklistService.saveChecklist("checklistArrival", this.checklist);
    this.navCtrl.pop();
  }

}
