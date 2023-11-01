const { test, expect } = require('@playwright/test');

test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to utf-8
  await expect(metaCharset).toBe('utf-8');
});

test('check that the viewport meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');
  const metaViewport = await page.$eval('meta[name="viewport"]', (meta) => meta.getAttribute('content'));
  await expect(metaViewport).toBe('width=device-width, initial-scale=1.0');
});

test('check that the title is "Personal Portfolio"', async ({ page }) => {
  // Using the page title to check that the title is "Andre Henry"

  await page.goto('/');
await page.waitForTimeout(2000);
const actualTitle = await page.title();
console.log('Actual Title:', actualTitle);
await expect(actualTitle).toBe('Personal Portfolio');
});

test('check that links are present in the nav tag', async ({ page }) => {
  // Using a locator to check the links in the nav tag are present
  await page.goto('/');
  const nav = page.locator('nav:has-text("Home")');
  await expect(nav).toBeVisible();
});

test('check that "Andre Henry" h1 is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Andre Henry"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Andre Henry")');
  await expect(heading).toBeVisible();
});

test('check that "Cyber Security Analyst & Web Developer" h2 is present', async ({ page }) => {
  // Using a locator to get the h2 element with the text "Cyber Security Analyst & Web Developer"
  await page.goto('/');
  const heading = page.locator('h2:has-text("Cyber Security Analyst & Web Developer")');
  await expect(heading).toBeVisible();
});

test('check hero image is present', async ({ page }) => {
  // Using a locator to get the hero image
  await page.goto('/');
  await expect(page.locator('.hero-image img')).toBeVisible();
});

test('check that the "Projects" section is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Projects"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Projects")');
  await expect(heading).toBeVisible();
});

test('check that the Full-stack Ecommerce Website h2 element is present in the Project section', async ({ page }) => {
  // Using a locator to get the h2 element with the specific text
  const specificH2Text = 'Full-stack Ecommerce Website (09/2022 - 12/2022) '; // Replace with the actual text you want to match
  await page.goto('/');
  await expect(page.locator('h2:has-text("' + specificH2Text + '")')).toBeVisible();
});

test('check that the "Articles" section is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "About"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Articles")');
  await expect(heading).toBeVisible();
});

test('check that the "Professional Links" section is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Professional Links"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Professional Links")');
  await expect(heading).toBeVisible();
});

test ('check that the links in the footer are present', async ({ page }) => {
  // Using a locator to check the links in the footer

  await page.goto('/');
  const footer = page.locator('footer:has-text("Home")');
  await expect(footer).toBeVisible();
});

