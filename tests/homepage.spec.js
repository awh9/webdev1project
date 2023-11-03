const { test, expect } = require('@playwright/test');

test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to utf-8
  await expect(metaCharset).toBe('UTF-8');
});

test('check that the viewport meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');
  const metaViewport = await page.$eval('meta[name="viewport"]', (meta) => meta.getAttribute('content'));
  await expect(metaViewport).toBe('width=device-width, initial-scale=1.0');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto('/');
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

test('check that the title is "Personal Portfolio"', async ({ page }) => {
  // Using the page title to check that the title is "Andre Henry"
  await page.goto('/');
await page.waitForTimeout(2000);
const actualTitle = await page.title();
console.log('Actual Title:', actualTitle);
await expect(actualTitle).toBe('Personal Portfolio');
});

/* This test checks that the page title on the resume page is not empty */
test('Check Page Title', async ({ page }) => {
  await page.goto('/resume.html');
  const title = await page.title();
  await expect(title).not.toBe('');
});

/* This test checks that the main content area is present on the resume page */
test('Check Main Content Area', async ({ page }) => {
  await page.goto('/resume.html');
  await expect(page.locator('body > .container > .main-content')).toBeVisible();
});

/* This test checks that the sidebar area is present on the resume page */
test('Check Sidebar Area', async ({ page }) => {
  await page.goto('/resume.html');
  await expect(page.locator('body > .container > aside.sidebar')).toBeVisible();
});

/* This test checks that the profile image is visible on the resume page */
test('Check Profile Image', async ({ page }) => {
  await page.goto('/resume.html');
  await expect(page.locator('.portrait img')).toBeVisible();
});

test('check that "Andre Henry" h1 is present', async ({ page }) => {
  // Using a locator to get the h1 element with the text "Andre Henry"

  await page.goto('/');
  const heading = page.locator('h1:has-text("Andre Henry")');
  await expect(heading).toBeVisible();
});

test('check that "Cyber Security Analyst & Web Developer" p is present', async ({ page }) => {
  // Using a locator to get the p element with the text "Cyber Security Analyst & Web Developer"
  await page.goto('/');
  const heading = page.locator('p:has-text("Cyber Security Analyst & Web Developer")');
  await expect(heading).toBeVisible();
});

test('check hero2 image is present', async ({ page }) => {
  // Using a locator to get the hero image
  await page.goto('/');
  await expect(page.locator('.hero2-image img')).toBeVisible();
});

test('check that the "Projects" section is present', async ({ page }) => {
  // Using a locator to get the h2 element with the text "Projects"

  await page.goto('/');
  const heading = page.locator('h2:has-text("Projects")');
  await expect(heading).toBeVisible();
});

test('check that the Full-stack Ecommerce Website project is present in the Project section', async ({ page }) => {
  // Using a locator to get the h3 element with the specific text
  const specificH3Text = 'Full-stack Ecommerce Website'; // Replace with the actual text you want to match
  await page.goto('/');
  await expect(page.locator('h3:has-text("' + specificH3Text + '")')).toBeVisible();
});

test('check that the Full-stack Ecommerce Website YouTube link is present and visible', async ({ page }) => {
  const linkHref = 'https://github.com/awh9/IT202/tree/prod'; // URL of the YouTube link
  await page.goto('/resume.html'); // Navigate to the page
  // Wait for the link to appear
  await page.waitForSelector(`a[href="${linkHref}"]`);
  // Check if the link is visible
  const link = page.locator(`a[href="${linkHref}"]`);
  await expect(link).toBeVisible();
});

test('check that the Java Sockets project YouTube link is present and visible', async ({ page }) => {
  const linkHref = 'https://www.youtube.com/watch?v=3HqrtGiEWQM'; // URL of the YouTube link
  await page.goto('/resume.html'); // Navigate to the page
  // Wait for the link to appear
  await page.waitForSelector(`a[href="${linkHref}"]`);
  // Check if the link is visible
  const link = page.locator(`a[href="${linkHref}"]`);
  await expect(link).toBeVisible();
});

test('check that the Unity XR project link is present and visible', async ({ page }) => {
  const linkHref = 'https://ahenry777.itch.io/it-201-sprint-4'; // URL of the YouTube link
  await page.goto('/resume.html'); // Navigate to the page
  // Wait for the link to appear
  await page.waitForSelector(`a[href="${linkHref}"]`);
  // Check if the link is visible
  const link = page.locator(`a[href="${linkHref}"]`);
  await expect(link).toBeVisible();
});

test('check that the Java sockets project is present in the Project section', async ({ page }) => {
  // Using a locator to get the h3 element with the specific text
  const specificH3Text = 'Chatroom - Java Sockets'; // Replace with the actual text you want to match
  await page.goto('/');
  await expect(page.locator('h3:has-text("' + specificH3Text + '")')).toBeVisible();
});

test('check that the Unity XR game project is present in the Project section', async ({ page }) => {
  // Using a locator to get the h3 element with the specific text
  const specificH3Text = 'Unity XR Game'; // Replace with the actual text you want to match
  await page.goto('/');
  await expect(page.locator('h3:has-text("' + specificH3Text + '")')).toBeVisible();
});

test('check that the "Articles" section is present', async ({ page }) => {
  // Using a locator to get the h2 element with the text "About"
  await page.goto('/');
  const heading = page.locator('h2:has-text("Articles")');
  await expect(heading).toBeVisible();
});

test('check that the "Professional Links" section is present', async ({ page }) => {
  // Using a locator to get the h2 element with the text "Professional Links"

  await page.goto('/');
  const heading = page.locator('h2:has-text("Professional Links")');
  await expect(heading).toBeVisible();
});

test ('check that the footer has text', async ({ page }) => {
  // Using a locator to check the links in the footer

  await page.goto('/');
  const footer = page.locator('footer:has-text("©Henry 2023")');
  await expect(footer).toBeVisible();
});

