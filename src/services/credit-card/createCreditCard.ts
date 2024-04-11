import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard';

const baseURL = '';

export async function createCreditCard(creditCard: CreditCard): Promise<CreditCard> {
  try {
    const response: AxiosResponse<CreditCard> = await axios.post(
      `${baseURL}/creditCard`,
      creditCard
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to create creditCard: ${error.message}`);
    } else {
      throw new Error(`Failed to create creditCard: ${String(error)}`);
    }
  }
}
