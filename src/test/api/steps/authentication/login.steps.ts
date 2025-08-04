import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AuthAPI } from '../../../../api/AuthAPI';
import { ApiWorld } from '../../../support/world.api';

const authAPI = new AuthAPI();

Given('I loginn with username {string} and password {string}', async function (this: ApiWorld, username: string, password: string) {
  this.response = await authAPI.login(username, password);
});
Then('the response should contain a token', async function (this: ApiWorld) {
  const body = await this.response?.json();
  expect(body.token).toBeTruthy();
});
