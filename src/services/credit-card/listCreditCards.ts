import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard';

export async function listCreditCards(baseURL: string): Promise<CreditCard[]> {
  try {
    const response: AxiosResponse<CreditCard[]> = await axios.get(
      `${baseURL}/creditCard`
    );
    return response.data;
    } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to list creditCard: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to list creditCard: ${String(error)}`);
    }
  }
}