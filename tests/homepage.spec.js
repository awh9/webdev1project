const { test, expect } = require('@playwright/test');

test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to utf-8
  await expect(metaCharset).toBe('utf-8');
});

test('check that "Andre Henry" h1 is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Andre Henry"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Andre Henry")');
  await expect(heading).toBeVisible();
});

test('check that the "Projects" section is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Projects"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Projects")');
  await expect(heading).toBeVisible();
});

test('check that the "Articles" section is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "About"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Articles")');
  await expect(heading).toBeVisible();
});


