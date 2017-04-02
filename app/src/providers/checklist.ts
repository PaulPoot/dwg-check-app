import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the Checklist provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Checklist {

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello Checklist Provider');
  }

  getChecklist(key: string) {
    return this.storage.get(key).then((val) => {
      return JSON.parse(val);
    })
  }

  saveChecklist(key: string, checklist) {
    return this.storage.set(key, JSON.stringify(checklist));
  }

  deleteChecklist(key: string) {
    return this.storage.remove(key);
  }
 
}
