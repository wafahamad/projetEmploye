import { Employe } from "./employe";

export class Conge {
    id: number;
    employeid: Employe;
    endDate: Date;
    startDate: Date;
    description: string;
    statut: string; // Peut être 'En attente', 'Validé' ou 'Rejeté'
  
    constructor(
      id: number,
      employeid: Employe,
      endDate: Date,
      startDate: Date,
      description: string,
      statut: string
    ) {
      this.id = id;
      this.employeid = employeid;
      this.endDate = endDate;
      this.startDate = startDate;
      this.description = description;
      this.statut = statut;
    }
  }
  