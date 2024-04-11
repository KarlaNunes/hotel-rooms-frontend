import axios from 'axios';

const baseURL = '';

export async function deleteRoom(id: number): Promise<void> {
    try {
      await axios.delete(`${baseURL}/rooms/${id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to delete room: ${(error as Error).message}`);
      } else {
        throw new Error(`Failed to delete room: ${String(error)}`);
      }
    }
}
