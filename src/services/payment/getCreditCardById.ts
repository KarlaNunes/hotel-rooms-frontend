import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard';

export async function getCreditCardById(baseUrl: string, id: number): Promise<CreditCard> {
    try {
        const response: AxiosResponse<CreditCard> = await axios.get(`${baseUrl}/creditCards/${id}`)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to get credit card by ID: ${(error as Error).message}`)
        } else {
            throw new Error(`Failed to get credit card by ID: ${String(error)}`)
        }
    }
}