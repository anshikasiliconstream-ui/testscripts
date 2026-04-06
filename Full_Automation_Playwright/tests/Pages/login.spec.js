import{test, expect}from '@playwright/test';
import{ Loginpage } from "./login";
import{NavigationPage}from "./physio"
import { RegisterNewpatient } from './registerpatient';

test('Login', async({page}) => {
    const Login= new Loginpage(page)
   await Login.gotoLoginpage()
   await Login.login('anshika@gmail.com','@!@#$');

   // Wait for dashboard/home after login
    await page.waitForURL('**/');

  const nav = new Navigationpage(page);

  // Navigate to Patients
  await nav.clickpatients();
  await expect(page).toHaveURL(/patients/);
  await page.waitForTimeout(3000); // wait 3 seconds


  // Navigate to Dashboard
  await nav.clickdashboard();
  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(2000);  //wait for 2 sec
 

  const addpatient = new RegisterNewpatient(page);
//   naviaget to register new patient
await addpatient.gotoregisterpatientpage()
await addpatient.registerpatient('Atharv', '7', '7827279330', 'Prayagraj')
await page.waitForTimeout(4000);  //wait 2 secons
});
