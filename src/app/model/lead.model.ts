import { generateUniqueId } from "../helpers/helper";

export class Lead {
    id!: string;
    fullName?: string;
    email!: string;

    constructor() {
        this.id = generateUniqueId();
        this.fullName = "";
        this.email = "";
    }
}