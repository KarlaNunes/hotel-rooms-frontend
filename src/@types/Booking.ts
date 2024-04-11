export interface Booking {
    id?: number;
    fromDate: Date;
    untilDate: Date;
    price: number;
    roomId: number;
    paymentId: number;
    userId: number;
}