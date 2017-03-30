export class ChecklistLocomotive {
  allWagonsArrived: boolean;
  noExtraWagons: boolean;
  noWagonsBlueLetter: boolean;
  noWagonsRedLetter: boolean;
  wagonDatesNotExpired: boolean;
  noWagonTanksDamaged: boolean;
  tankDatesNotExpired: boolean;
  allLidsClosed: boolean;
  noLidsLeak: boolean;
  noLidsDamaged: boolean;
  wagonNumbers: String;
  dateTime: String;
  saved: boolean;
  
  constructor() { 
    this.allWagonsArrived = false;
    this.noExtraWagons = false;
    this.noWagonsBlueLetter = false;
    this.noWagonsRedLetter = false;
    this.wagonDatesNotExpired = false;
    this.noWagonTanksDamaged = false;
    this.tankDatesNotExpired = false;
    this.allLidsClosed = false;
    this.noLidsLeak = false;
    this.noLidsDamaged = false;
    this.wagonNumbers = null;
    this.dateTime = null;
    this.saved = false;
  }
}