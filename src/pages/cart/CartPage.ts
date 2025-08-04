import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<boolean> {
    return await this.page.url().includes('cart.html');
  }

  async getCartItems(): Promise<string[]> {
  const items = this.page.locator('.cart_item .inventory_item_name');
  const count = await items.count();
  const names: string[] = [];

  for (let i = 0; i < count; i++) {
    const name = await items.nth(i).textContent();
    names.push(name ?? ''); // Nếu null thì đẩy chuỗi rỗng
  }

  return names;
}


  async removeProduct(productName: string) {
    const product = this.page.locator('.cart_item').filter({
      hasText: productName,
    });
    await product.locator('button:has-text("Remove")').click();
  }

  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}
