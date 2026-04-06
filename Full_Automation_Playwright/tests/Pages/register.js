export class Registerpage {
    constructor(page){
        this.page = page
        this.signup_link = this.page.locator('text=Signup')
        this.email = page.getByPlaceholder('admin@clinic.com')
        this.password = page.locator('input[type="password"]')
        this.submit_btn = page.getByRole('button', { name: 'Submit' })
    }

    async gotosignuppage(){
        await this.page.goto('http://ec2-13-48-105-24.eu-north-1.compute.amazonaws.com/')
        await this.page.getByText('Login / Signup').click()
        await this.signup_link.click()
        
        
    }

    async register(email, password){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.submit_btn.click()
    }
}