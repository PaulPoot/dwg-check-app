import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { ChecklistArrivalPage } from '../checklist-arrival/checklist-arrival';
import { ChecklistDeparturePage } from '../checklist-departure/checklist-departure';
import { ChecklistLocomotivePage} from '../checklist-locomotive/checklist-locomotive';

import { User } from '../../providers/user';
import { Checklist } from '../../providers/checklist';

import { ChecklistArrival } from '../../classes/checklist-arrival';
import { ChecklistDeparture } from '../../classes/checklist-departure';
import { ChecklistLocomotive } from '../../classes/checklist-locomotive';

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

  checklistArrival: ChecklistArrival;
  checklistDeparture: ChecklistDeparture;
  checklistLocomotive: ChecklistLocomotive;
  readyForSubmit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: User, private checklistService: Checklist, public http: Http) {
    this.checklistArrival = new ChecklistArrival();
    this.checklistDeparture = new ChecklistDeparture();
    this.checklistLocomotive = new ChecklistLocomotive();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  ionViewWillEnter() {
    this.checklistService.getChecklist("checklistArrival").then((val) => {
      if (val) {
        this.checklistArrival = val;
      }

      this.checklistService.getChecklist("checklistDeparture").then((val) => {
        if (val) {
          this.checklistDeparture = val;
        }

        this.checklistService.getChecklist("checklistLocomotive").then((val) => {
          if (val) {
            this.checklistLocomotive = val;
          }

          if (this.checklistLocomotive.saved) {
            if (this.checklistArrival.saved || this.checklistDeparture.saved) {
              this.readyForSubmit = true;
            }
          }
        });
      });
    });
  }

  postChecklist(checklistType, checklist) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer GokgwJghPyUoIEfkUZT09fxAbOuvL2Ng' });
    let options = new RequestOptions({ headers: headers });
    let postParams = {
      active: 1,
      type: checklistType,
      content: JSON.stringify(checklist),
    };

    return this.http.post('http://paulpoot.eu/dwg/api/1/tables/checklist/rows', postParams, options);
  }

  submitChecklists() {
    this.readyForSubmit = false;

    if (this.checklistArrival.saved) {
      this.postChecklist('Arrival', this.checklistArrival).subscribe(data => {
        if (data.ok) {
          this.checklistService.deleteChecklist("checklistArrival").then((val) => {
            this.checklistArrival = new ChecklistArrival();
          });
        } else {
          console.log(data);
          this.readyForSubmit = true;
        }
      })
    }

    if (this.checklistDeparture.saved) {
      this.postChecklist('Departure', this.checklistDeparture).subscribe(data => {
        if (data.ok) {
          this.checklistService.deleteChecklist("checklistDeparture").then((val) => {
            this.checklistDeparture = new ChecklistDeparture();
          });
        } else {
          console.log(data);
          this.readyForSubmit = true;
        }
      })
    }

    if (this.checklistLocomotive.saved) {
      this.postChecklist('Locomotive', this.checklistLocomotive).subscribe(data => {
        if (data.ok) {
          this.checklistService.deleteChecklist("checklistLocomotive").then((val) => {
            this.checklistLocomotive = new ChecklistLocomotive();
          });
        } else {
          console.log(data);
          this.readyForSubmit = true;
        }
      })
    }
  }



  openChecklist(checklist) {
    this.navCtrl.push(checklist);
  }
}
