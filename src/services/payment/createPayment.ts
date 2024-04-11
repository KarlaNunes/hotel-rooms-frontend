import axios, { AxiosResponse } from 'axios';
import { Payment } from '../../@types/Payment'

const baseURL = ''
export async function createUser(payment: Payment): Promise<Payment> {
    try {
        const response: AxiosResponse<Payment> = await axios.post(
            `${baseURL}/payments`,
            payment
        )
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to create payment: ${error.message}`)
        } else {
            throw new Error(`Failed to create payment: ${String(error)}`)
        }
    }
}