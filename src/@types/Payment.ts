import { CreditCard } from './CreditCard';
import { Booking } from "./Booking";

export interface Payment {
    id?: number;
    booking: Booking;
    creditCard: CreditCard;
}