import { test } from '@playwright/test';
import { Registerpage } from './register.js';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const filePath = path.join(process.cwd(), 'tests/data/users.csv');
const users = parse(
  fs.readFileSync(filePath, 'utf-8'),
  { columns: true, skip_empty_lines: true }
);

for (const user of users) {
test(`Registration ${user.email}`, async ({ page }) => {
    const Register = new Registerpage(page)
    await Register.gotosignuppage()
    await Register.register(user.email, user.password)
})
 const nav = new NavigationPage(page);

  await page.goto('http://ec2-13-48-105-24.eu-north-1.compute.amazonaws.com/');

  await nav.home();
  await page.goBack();

  await nav.clickpatients();
  await expect(page).toHaveURL(/patients/);
  await page.goBack();

  await nav.clickdashboard();
  await expect(page).toHaveURL(/dashboard/);
}