import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  use: {
    ignoreHTTPSErrors: true
  }
});
