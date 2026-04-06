import { expect } from '@playwright/test';
export class HomePage{
    constructor(page){
        this.page= page;
        this.logout_btn= this.page.getByText('Logout');
        this.getstarted_btn= this.page.getByText('Get Started');
        this.bookdemo_btn= this.page.getByText('Book a Demo');
        this.title = page.getByText('PhysioCare', {exact: 'true'});
        this.tagline = page.getByText('THE CLINICAL SANCTUARY');
        this.securityText = page.getByText('Enterprise-grade security');
    }

    async  gotohome(){
    await this.page.goto('http://ec2-13-48-105-24.eu-north-1.compute.amazonaws.com/')
}

  async logout(){
    await this.logout_btn.click();
  }

  async verifyHomePageLoaded() {
    await expect(this.title).toBeVisible();
    await expect(this.tagline).toBeVisible();
  }
  async clickGetStarted() {
  await expect(this.getstarted_btn).toBeVisible();
  await this.getstarted_btn.click();
}

  async clickBookDemo() {
  await expect(this.bookdemo_btn).toBeVisible();
  await this.bookdemo_btn.click();
}

  async scrollDown() {
    await this.page.mouse.wheel(0, 1000);
  }

  async verifyScrollContent() {
    await expect(this.securityText).toBeVisible();
  }
}