import axios, { AxiosResponse } from 'axios';
import { Payment } from '../../@types/Payment';

const baseURL = 'http://localhost:3000';
export async function updatePayment(payment: Payment): Promise<Payment> {
  try {
    const response: AxiosResponse<Payment> = await axios.put(
      `${baseURL}/payments/${payment.id}`,
      payment
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update payment: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to update payment: ${String(error)}`);
    }
  }
}
  