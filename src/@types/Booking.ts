export interface Booking {
    id?: number;
    from_date: Date;
    until_date: Date;
    price: number;
    room: number;
    payment_id: number;
    user_id: number;
}