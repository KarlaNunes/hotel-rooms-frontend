import axios from 'axios';

const baseURL = '';

export async function deleteBooking(id: number): Promise<void> {
    try {
      await axios.delete(`${baseURL}/bookings/${id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to delete booking: ${(error as Error).message}`);
      } else {
        throw new Error(`Failed to delete booking: ${String(error)}`);
      }
    }
}
