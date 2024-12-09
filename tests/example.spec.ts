import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Truy cập trang web
  await page.goto('http://material.playwrightvn.com/');

  // Kiểm tra rằng title chứa text "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  // Truy cập trang web
  await page.goto('http://material.playwrightvn.com/');

  // Click vào link chứa text "Bài học 1: Register Page"
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Kiểm tra trang chứa heading với nội dung "User Registration"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});

