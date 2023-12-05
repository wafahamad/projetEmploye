export class CalendrierEmp {
    jour:Date;
    IdCalandrierEmp: number;
    heureArriv: Date;
    heureDep: Date;
    heureSup: number;
    heureConge: number;
  
    constructor(
      IdCalandrierEmp: number,
      heureArriv: Date,
      heureDep: Date,
      heureSup: number,
      heureConge: number,
      jour:Date

    ) {
      this.IdCalandrierEmp = IdCalandrierEmp;
      this.heureArriv = heureArriv;
      this.heureDep = heureDep;
      this.heureSup = heureSup;
      this.heureConge = heureConge;
      this.jour=jour
    }
  }
  