import axios, { AxiosResponse } from 'axios';
import { User } from '../../@types/User';

const baseUrl = 'http://localhost:3000';

export async function getUserById(id: number): Promise<User> {
    try {
        const response: AxiosResponse<User> = await axios.get(`${baseUrl}/users/${id}`)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to get user by ID: ${(error as Error).message}`)
        } else {
            throw new Error(`Failed to get user by ID: ${String(error)}`)
        }
    }
}