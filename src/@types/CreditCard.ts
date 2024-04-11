export interface CreditCard {
    id?: number;
    number: number;
    dueDate: Date;
    owner: number;
    cvv: string;
}