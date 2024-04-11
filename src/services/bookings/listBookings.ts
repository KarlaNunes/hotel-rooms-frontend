import axios, { AxiosResponse } from 'axios';
import { Booking } from '../../@types/Booking';

export async function listBookings(baseURL: string): Promise<Booking[]> {
    try {
      const response: AxiosResponse<Booking[]> = await axios.get(
        `${baseURL}/bookings`
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to list bookings: ${(error as Error).message}`);
      } else {
        throw new Error(`Failed to list bookings: ${String(error)}`);
      }
    }
}