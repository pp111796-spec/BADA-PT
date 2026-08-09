import { chromium } from 'playwright';
const shots = 'C:\\Users\\user\\AppData\\Local\\Temp\\claude\\c--Users-user-OneDrive---------------BADA-PT\\8a76f840-cea8-44c5-86bd-f3022be47934\\scratchpad\\rapid';
const fs = await import('fs');
fs.mkdirSync(shots, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 960, height: 600 } });
await page.goto('http://localhost:5173', { waitUntil: 'load' });
await page.locator('button:has-text("건너뛰기")').waitFor({ state: 'visible', timeout: 10000 });
await page.waitForTimeout(800);
await page.locator('button:has-text("건너뛰기")').click();

const waits = [0, 30, 30, 40, 50, 50, 50, 100, 100, 150, 200, 300];
let elapsed = 0;
for (let i = 0; i < waits.length; i++) {
  if (waits[i] > 0) await page.waitForTimeout(waits[i]);
  elapsed += waits[i];
  await page.screenshot({ path: `${shots}\\s${String(i).padStart(2, '0')}_t${elapsed}ms.png` });
}
await browser.close();
console.log('done');
