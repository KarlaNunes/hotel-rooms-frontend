import axios, { AxiosResponse } from 'axios';
import { Payment } from '../../@types/Payment';

const baseURL = 'http://localhost:3000';

export async function getPaymentById( id: number): Promise<Payment> {
  try {
    const response: AxiosResponse<Payment> = await axios.get(
      `${baseURL}/payments/${id}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to get payment by ID: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to get payment by ID: ${String(error)}`);
    }
  }
}