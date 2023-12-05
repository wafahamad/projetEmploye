import { Employe } from "./employe";

export class Comments {
    constructor(
        public id: number,
        public employe: Employe,
        public content: string,
        public date: Date
    )
    {}
}
