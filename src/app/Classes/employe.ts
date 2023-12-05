import { CalendrierEmp } from "./calendrier-emp";

export class Employe {
    id: number;
    nom: string;
    prenom: string;
    poste: string;
    adresse: string;
    departement: string;
    role : string;
    calendrier:CalendrierEmp[]
    constructor(id: number, nom: string, prenom: string, poste: string, adresse: string,  departement: string,role:string,calendrier:CalendrierEmp[]) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.poste = poste;
      this.adresse = adresse;
      this.role = role
      this.departement = departement;
      this.calendrier=calendrier
    }
  }
  