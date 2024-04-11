import axios, { AxiosResponse } from 'axios';
import { Booking } from '../../@types/Booking';

export async function updateBooking(baseURL: string, booking: Booking): Promise<Booking> {
  try {
    const response: AxiosResponse<Booking> = await axios.put(
      `${baseURL}/bookings/${booking.id}`,
      booking
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update booking: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to update booking: ${String(error)}`);
    }
  }
}
  