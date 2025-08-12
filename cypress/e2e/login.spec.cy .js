import loginPage from './page/loginPage';
import dashboardPage from './page/dashboardPage';
import menuPage from './page/menuPage';
import myInfoPage from './page/myInfoPage';


const loginPage = new loginPage()
const dashboardPage = new dashboardPage()
const menuPage = new menuPage()
constmyInfoPage =new myInfoPage()



describe('Orange HRM Tests', () => {
   it('User Info Update - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userSuccess.useename, userData.userSuccess.password)


    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'nickName')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '0984654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()


  });

 

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials');
  });

});