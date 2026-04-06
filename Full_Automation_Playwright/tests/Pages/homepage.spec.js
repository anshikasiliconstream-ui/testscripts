import{test , expect} from '@playwright/test';
import { HomePage } from './homepage';

test.describe('Home Page Tests', () => {

  test('Verify Home Page Loaded', async ({ page }) => {
    const home = new HomePage(page);

    await home.gotohome();
    await home.verifyHomePageLoaded();
  });

  test('Verify Get Started Button', async ({ page }) => {
    const home = new HomePage(page);

    await home.gotohome();
    await home.clickGetStarted();
  });

  test('Verify Book Demo Button', async ({ page }) => {
    const home = new HomePage(page);

    await home.gotohome();
    await home.clickBookDemo();
  });

  test('Verify Scroll Behavior', async ({ page }) => {
    const home = new HomePage(page);

    await home.gotohome();
    await home.scrollDown();
    await home.verifyScrollContent();
  });

});