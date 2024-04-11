import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard';

export async function updateCreditCard(baseURL: string, creditCard: CreditCard): Promise<CreditCard> {
  try {
    const response: AxiosResponse<CreditCard> = await axios.put(
      `${baseURL}/creditCard/${creditCard.id}`,
      creditCard
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update creditCard: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to update creditCard: ${String(error)}`);
    }
  }
}