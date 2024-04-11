import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard';

export async function getCreditCardById(baseURL: string, id: number): Promise<CreditCard> {
  try {
    const response: AxiosResponse<CreditCard> = await axios.get(
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