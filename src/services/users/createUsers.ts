import axios, { AxiosResponse } from 'axios';
import { User } from '../../@types/User'

const baseURL = 'http://localhost:3000'

export async function createUser(user: User): Promise<User> {
    try {
        const response: AxiosResponse<User> = await axios.post(
            `${baseURL}/users`,
            user
        )
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to create user: ${error.message}`)
        } else {
            throw new Error(`Failed to create user: ${String(error)}`)
        }
    }
}