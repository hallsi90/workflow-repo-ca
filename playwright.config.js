import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests/e2e',
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
  },
  webServer: {
    command: 'npx http-server . -p 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
  },
  reporter: [['html', { open: 'never' }]],
});
