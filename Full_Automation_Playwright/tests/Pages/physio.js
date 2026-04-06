export class Navigationpage {
  constructor(page) {
    this.page = page;

    const nav = page.locator('nav');
    this.patients = nav.getByRole('link', { name: 'Patients' }).first();
    this.dashboard = nav.getByRole('link', { name: 'Dashboard' }).first();
    
  }

  async clickpatients() {
    await this.patients.click();
  }

  async clickdashboard() {
    await this.dashboard.click();
  }
}