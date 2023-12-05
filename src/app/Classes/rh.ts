import { Employe } from './employe';

export class RH extends Employe {
 
 IdRH: string;

  constructor(IdEmploye: number, nom: string, prénom: string, post: string, adresse: string, performance: string, département: string, attributRH: string) {
    super(IdEmploye, nom, prénom, post, adresse, performance, département);
    this.IdRH = attributRH;
  }
}
