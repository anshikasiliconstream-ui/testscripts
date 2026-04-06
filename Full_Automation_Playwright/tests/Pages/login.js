exports.Loginpage= class Loginpage {

    constructor(page){
        this.page= page
        this.email_textbox= page.getByPlaceholder('admin@clinic.com')
        this.password_textbox = page.locator('input[type="password"]')
        this.Submit_button= page.getByRole('button', {name:'Submit'})
    }
    async gotoLoginpage(){
         await this.page.goto('http://ec2-13-48-105-24.eu-north-1.compute.amazonaws.com/')
         await this.page.getByText('Login / SignUp').first().click();
    }
     async login(email, password){
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.Submit_button.click()
   
    }
    
}