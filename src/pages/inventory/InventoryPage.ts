import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<boolean> {
    return await this.page.locator('.inventory_list').isVisible();
  }

  async addProductToCart(productName: string) {
    const productLocator = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });
    await productLocator.locator('button:has-text("Add to cart")').click();
  }

  async removeProductFromCart(productName: string) {
    const productLocator = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });
    await productLocator.locator('button:has-text("Remove")').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async getCartBadgeCount(): Promise<number> {
    const badge = this.page.locator('.shopping_cart_badge');
    if (await badge.isVisible()) {
      const text = await badge.textContent();
      return Number(text ?? '0');
    }
    return 0;
  }
}
