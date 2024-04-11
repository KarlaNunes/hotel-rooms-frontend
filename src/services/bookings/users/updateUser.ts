import axios, { AxiosResponse } from 'axios';
import { User } from '../../../@types/User'

export async function updateUser(baseURL: string, user: User): Promise<User> {
    try {
        const response: AxiosResponse<User> = await axios.put(
            `${baseURL}/users/${user.id}`, user
        )
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Failed to update user: ${(error as Error).message}`)
        } else {
            throw new Error(`Failed to update user: ${String(error)}`)
        }
    }
}