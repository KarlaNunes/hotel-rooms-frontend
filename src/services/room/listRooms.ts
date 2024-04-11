import axios, { AxiosResponse } from 'axios';
import { Room } from '../../@types/Room';

export async function listRooms(baseURL: string): Promise<Room[]> {
  try {
    const response: AxiosResponse<Room[]> = await axios.get(
      `${baseURL}/rooms`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to list rooms: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to list rooms: ${String(error)}`);
    }
  }
}
  
