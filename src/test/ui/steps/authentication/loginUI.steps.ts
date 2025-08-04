import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../../support/world';

Then('I should see the SauceDemo logo', async function (this: CustomWorld) {
  await expect(this.page.locator('.login_logo')).toBeVisible();
});

Then('I should see the username input', async function (this: CustomWorld) {
  await expect(this.page.locator('#user-name')).toBeVisible();
});

Then('I should see the password input', async function (this: CustomWorld) {
  await expect(this.page.locator('#password')).toBeVisible();
});

Then('I should see the login button', async function (this: CustomWorld) {
  await expect(this.page.locator('#login-button')).toBeVisible();
});

Then('the username placeholder should be {string}', async function (this: CustomWorld, expected: string) {
  const value = await this.page.getAttribute('#user-name', 'placeholder');
  expect(value).toBe(expected);
});

Then('the password placeholder should be {string}', async function (this: CustomWorld, expected: string) {
  const value = await this.page.getAttribute('#password', 'placeholder');
  expect(value).toBe(expected);
});

When('I click the login button', async function (this: CustomWorld) {
  await this.page.click('#login-button');
});
