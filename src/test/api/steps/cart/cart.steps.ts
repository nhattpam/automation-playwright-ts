import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartAPI } from '../../../../api/CartAPI';

let response: any;
const cartAPI = new CartAPI();
let productId: string;

Given('I have a product with id {string}', async (id: string) => {
  productId = id;
});

When('I add the product to the cart', async () => {
  response = await cartAPI.addToCart(productId);
});

Then('the response status should be {int}', async (statusCode: number) => {
  expect(response.status()).toBe(statusCode);
});

Then('the response header {string} should contain {string}', async (headerName: string, expectedValue: string) => {
  const header = response.headers()[headerName.toLowerCase()];
  expect(header).toContain(expectedValue);
});
