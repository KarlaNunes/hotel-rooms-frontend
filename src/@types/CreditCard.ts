export interface CreditCard {
    id?: number;
    number: string;
    due_date: string;
    owner?: number;
    cvv: string;
}