import loginPage from './page/loginPage';
import dashboardPage from './page/dashboardPage';
import menuPage from './page/menuPage';
import myInfoPage from './page/myInfoPage';

let userData;

describe('Orange HRM Tests', () => {

  before(() => {
    cy.fixture('userData.json').then((data) => {
      userData = data;
    });
  });

  it('User Info Update - Success', () => {
    
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    
    dashboardPage.checkDashboardPage();

    cy.get(dashboardPage.selectors.dashboardGrid).should('be.visible');
    menuPage.clickMyInfo();

    
    myInfoPage.fillPersonalDetails('firstNameTest', 'LastNameTest', 'NicknameTest');
    myInfoPage.fillEmployeeDetails('Employee', 'OtherIdTest', 'DriversLincenseTest', 'sinNumbeTest');
    myInfoPage.saveForm();
    myInfoPage.fillStatus();
  });

  it('Login - Fail', () => {
    
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);

    
    loginPage.getLoginErrorMessage()
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

});
