import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InventoryAPI } from '../../../../api/InventoryAPI';

let response: any;
const inventoryAPI = new InventoryAPI();

When('I request the inventory list', async () => {
  response = await inventoryAPI.getInventory();
});

Then('the response status should be {int}', async (statusCode: number) => {
  expect(response.status()).toBe(statusCode);
});

Then('the response header {string} should contain {string}', async (headerName: string, expectedValue: string) => {
  const header = response.headers()[headerName.toLowerCase()];
  expect(header).toContain(expectedValue);
});
