import { chromium } from 'playwright';
const shotsDir = 'C:\\Users\\user\\AppData\\Local\\Temp\\claude\\c--Users-user-OneDrive---------------BADA-PT\\8a76f840-cea8-44c5-86bd-f3022be47934\\scratchpad\\rec';
const fs = await import('fs');
fs.mkdirSync(shotsDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 960, height: 600 },
  recordVideo: { dir: shotsDir, size: { width: 960, height: 600 } },
});
const page = await context.newPage();
await page.goto('http://localhost:5173', { waitUntil: 'load' });
await page.locator('button:has-text("건너뛰기")').waitFor({ state: 'visible', timeout: 10000 });
await page.waitForTimeout(500);
await page.locator('button:has-text("건너뛰기")').click();
await page.waitForTimeout(3000);
await page.close();
await context.close();
await browser.close();
console.log('done, video saved to', shotsDir);
