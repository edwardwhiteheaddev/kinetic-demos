import { test, expect } from '@playwright/test';

test('login flow displays dashboard KPIs', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'demo@ceodashboard.dev');
  await page.fill('input[name="password"]', 'demo1234');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/dashboard');
  await expect(page.getByText('Key KPIs')).toBeVisible({ timeout: 10000 });
});
