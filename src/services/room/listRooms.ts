import axios, { AxiosResponse } from 'axios';
import { Room } from '../../@types/Room';

const baseURL = 'http://localhost:3000';

export async function listRooms(): Promise<Room[]> {
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
  
