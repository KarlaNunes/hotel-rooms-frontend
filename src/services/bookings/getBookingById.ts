import axios, { AxiosResponse } from 'axios';
import { Booking } from '../../@types/Booking';

export async function getBookingById(baseURL: string, id: number): Promise<Booking> {
  try {
    const response: AxiosResponse<Booking> = await axios.get(
      `${baseURL}/bookings/${id}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to get booking by ID: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to get booking by ID: ${String(error)}`);
    }
  }
}