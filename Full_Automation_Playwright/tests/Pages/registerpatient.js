export class RegisterNewpatient{
    constructor(page){
        this.page= page
        this.name_inputbox= this.page.getByPlaceholder('Full Name');
        this.age_inputbox= this.page.getByPlaceholder('Age');
        this.gender = this.page.getByRole('button', { name: /^male$/i }).first();
        this.phone_number= this.page.getByPlaceholder('Phone number');
        this.address = this.page.getByPlaceholder('Address');
        this.drop_down = this.page.getByRole('combobox').nth(1);
        this.submit_btn= this.page.getByRole('button', {name: 'Submit Patient Record'});

    }
    async gotoregisterpatientpage(){
        await this.page.goto('http://ec2-13-48-105-24.eu-north-1.compute.amazonaws.com/patients/register')

    }
    async registerpatient(full_name, age, phone_number, address){
        await this.name_inputbox.fill(full_name);
        await this.age_inputbox.fill(age);
        await this.gender.click();
        await this.phone_number.fill(phone_number);
        await this.address.fill(address);
        await this.drop_down.selectOption({ label: 'Active' });
        await this.submit_btn.click();

    }
}