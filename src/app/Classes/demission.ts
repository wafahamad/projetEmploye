import { Employe } from "./employe";

export class Demission {
    constructor(
       public id:number,
        public employe:Employe,
        public  submissionDate: Date,
        public reason: string,
        public statut: string
    ){}
}

