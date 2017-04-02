export class ChecklistDeparture {
  allWagonsListed: boolean;
  trainlistEqualsWagonOrder: boolean;
  wagonsNotDamaged: boolean;
  wagonDatesNotExpired: boolean;
  noWagonTanksDamaged: boolean;
  tankDatesNotExpired: boolean;
  outsideTankNoProduct: boolean;
  allLidsClosed: boolean;
  noLidsLeak: boolean;
  noLidsDamaged: boolean;
  wagonNumbers: String;
  dateTime: String;
  saved: boolean;
  
  constructor() { 
    this.allWagonsListed = false;
    this.trainlistEqualsWagonOrder = false;
    this.wagonsNotDamaged = false;
    this.wagonDatesNotExpired = false;
    this.noWagonTanksDamaged = false;
    this.tankDatesNotExpired = false;
    this.outsideTankNoProduct = false;
    this.allLidsClosed = false;
    this.noLidsLeak = false;
    this.noLidsDamaged = false;
    this.wagonNumbers = null;
    this.dateTime = null;
    this.saved = false;
  }
}