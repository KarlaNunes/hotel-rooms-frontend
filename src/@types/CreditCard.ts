import { User } from "./User";

export interface CreditCard {
    id?: number;
    number: string;
    due_date: Date;
    owner: User;
    cvv: string;
}