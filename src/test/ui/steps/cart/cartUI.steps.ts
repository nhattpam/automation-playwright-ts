import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';

Then('the cart title should be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('.title')).toHaveText('Your Cart');
});

Then('the cart item should show name, price, description and quantity', async function (this: CustomWorld) {
  const item = this.page.locator('.cart_item');

  await expect(item.locator('.inventory_item_name')).toBeVisible();
  await expect(item.locator('.inventory_item_desc')).toBeVisible();
  await expect(item.locator('.inventory_item_price')).toBeVisible();
  await expect(item.locator('.cart_quantity')).toBeVisible();
});

Then('the checkout button should be visible', async function (this: CustomWorld) {
  await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
});
