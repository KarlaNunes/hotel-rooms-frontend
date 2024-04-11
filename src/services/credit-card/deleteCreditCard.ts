import axios from 'axios';

const baseURL = '';

export async function deleteCreditCard(id: number): Promise<void> {
  try {
    await axios.delete(`${baseURL}/creditCard/${id}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to delete creditCard: ${(error as Error).message}`);
    } else {
      throw new Error(`Failed to delete creditCard: ${String(error)}`);
    }
  }
}
