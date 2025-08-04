import { APIClient } from "../utils/apiClient";

export class InventoryAPI {
  async getInventory() {
    const client = await APIClient.createClient(process.env.BASE_URL_INVENTORY!);
    return client.get('/inventory');
  }
}
