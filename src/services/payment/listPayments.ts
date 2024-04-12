import axios, { AxiosResponse } from 'axios';
import { Payment } from '../../@types/Payment';

const baseURL = 'http://localhost:3000';
export async function listPayments(): Promise<Payment[]> {
  try {
    const response: AxiosResponse<Payment[]> = await axios.get(
      `${baseURL}/payments`
    );
    return response.data;
    } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to list payment: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to list payment: ${String(error)}`);
    }
  }
}