import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AuthAPI } from '../../../../api/AuthAPI';

let response: any;
const authAPI = new AuthAPI();

Given('I login with email {string} and password {string}', async (email: string, password: string) => {
  response = await authAPI.login(email, password);
});

Then('the response status should be {int}', async (statusCode: number) => {
  expect(response.status()).toBe(statusCode);
});

Then('the response should contain a token', async () => {
  const body = await response.json();
  expect(body.token).toBeTruthy();
});

Then('the response header {string} should contain {string}', async (headerName: string, expectedValue: string) => {
  const header = response.headers()[headerName.toLowerCase()];
  expect(header).toContain(expectedValue);
});
