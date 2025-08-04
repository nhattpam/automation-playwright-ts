import { APIClient } from "../utils/apiClient";

export class CartAPI {
  async addToCart(productId: string) {
    const client = await APIClient.createClient(process.env.BASE_URL_CART!);
    return client.post('/cart', { data: { productId, quantity: 1 } });
  }
}
