import axios, { AxiosResponse } from 'axios';
import { Room } from '../../@types/Room';

const baseURL = '';

export async function createRoom(room: Room): Promise<Room> {
  try {
    const response: AxiosResponse<Room> = await axios.post(
      `${baseURL}/rooms`,
      room
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to create room: ${error.message}`);
    } else {
      throw new Error(`Failed to create room: ${String(error)}`);
    }
  }
}
