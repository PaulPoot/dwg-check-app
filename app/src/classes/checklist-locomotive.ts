export class ChecklistLocomotive {
  locomotiveIsClean: boolean;
  highVisibilityJacket: boolean;
  notificationsOnDisplay: boolean;
  noWaterInTank: boolean;
  outsideLit: boolean;
  flashingLight: boolean;
  insideLit: boolean;
  claxon: boolean;
  wheelsInOrder: boolean;
  barsInOrder: boolean;
  greasePotInOrder: boolean;
  noLeaks: boolean;
  sufficientFuel: boolean;
  allTracksFree: boolean;
  switchesInOrder: boolean;
  wagonNumbers: String;
  dateTime: String;
  saved: boolean;
  
  constructor() { 
    this.locomotiveIsClean = false;
    this.highVisibilityJacket = false;
    this.notificationsOnDisplay = false;
    this.noWaterInTank = false;
    this.outsideLit = false;
    this.flashingLight = false;
    this.insideLit = false;
    this.claxon = false;
    this.wheelsInOrder = false;
    this.barsInOrder = false;
    this.greasePotInOrder = false;
    this.noLeaks = false;
    this.sufficientFuel = false;
    this.allTracksFree = false;
    this.switchesInOrder = false;
    this.wagonNumbers = null;
    this.dateTime = null;
    this.saved = false;
  }
}