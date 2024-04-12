import axios, { AxiosResponse } from 'axios';
import { Booking } from '../../@types/Booking';

const baseURL = 'http://localhost:3000';

export async function createBooking(booking: Booking): Promise<Booking> {
  try {
    const response: AxiosResponse<Booking> = await axios.post(
      `${baseURL}/bookings`,
      booking
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to create booking: ${error.message}`);
    } else {
      throw new Error(`Failed to create booking: ${String(error)}`);
    }
  }
}
