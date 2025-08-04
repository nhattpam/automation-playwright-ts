import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';


Then('each product card should show a name, description, price and Add to cart button', async function (this: CustomWorld) {
  const count = await this.page.locator('.inventory_item').count();

  for (let i = 0; i < count; i++) {
    const product = this.page.locator('.inventory_item').nth(i);
    await expect(product.locator('.inventory_item_name')).toBeVisible();
    await expect(product.locator('.inventory_item_desc')).toBeVisible();
    await expect(product.locator('.inventory_item_price')).toBeVisible();
    await expect(product.locator('button:has-text("Add to cart")')).toBeVisible();
  }
});

Then('the shopping cart icon should be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('.shopping_cart_link')).toBeVisible();
});
