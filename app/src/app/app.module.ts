import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { OverviewPage } from '../pages/overview/overview';
import { LoginPage } from '../pages/login/login';
import { ChecklistArrivalPage } from '../pages/checklist-arrival/checklist-arrival';
import { ChecklistDeparturePage } from '../pages/checklist-departure/checklist-departure';
import { ChecklistLocomotivePage} from '../pages/checklist-locomotive/checklist-locomotive';

@NgModule({
  declarations: [
    MyApp,
    OverviewPage,
    LoginPage,
    ChecklistArrivalPage,
    ChecklistDeparturePage,
    ChecklistLocomotivePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OverviewPage,
    LoginPage,
    ChecklistArrivalPage,
    ChecklistDeparturePage,
    ChecklistLocomotivePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
