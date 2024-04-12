export interface Booking {
    id?: number;
    from_date: string;
    until_date: string;
    price: number;
    room?: number;
    user_id?: number;
    roomNumber?: number;
    clientName?: string;
    clientContact?: string;
}