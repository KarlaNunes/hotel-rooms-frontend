import axios, { AxiosResponse } from 'axios';
import { CreditCard } from '../../@types/CreditCard'

const baseURL = ''
export async function createUser(creditCard: CreditCard): Promise<CreditCard> {
    try {
        const response: AxiosResponse<CreditCard> = await axios.post(
            `${baseURL}/creditCards`,
            creditCard
        )
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to create creditCard: ${error.message}`)
        } else {
            throw new Error(`Failed to create creditCard: ${String(error)}`)
        }
    }
}