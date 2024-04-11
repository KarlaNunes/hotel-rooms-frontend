import axios, { AxiosResponse } from 'axios';
import { Room } from '../../@types/Room';

export async function updateRoom(baseURL: string, room: Room): Promise<Room> {
  try {
    const response: AxiosResponse<Room> = await axios.put(
      `${baseURL}/rooms/${room.id}`,
      room
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update room: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to update room: ${String(error)}`);
    }
  }
}
  