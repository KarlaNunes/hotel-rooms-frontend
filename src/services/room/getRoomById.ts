import axios, { AxiosResponse } from 'axios';
import { Room } from '../../@types/Room';

export async function getRoomById(baseURL: string, id: number): Promise<Room> {
  try {
    const response: AxiosResponse<Room> = await axios.get(
      `${baseURL}/rooms/${id}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to get room by ID: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to get room by ID: ${String(error)}`);
    }
  }
}