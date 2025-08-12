import LoginPage from './page/loginPage';
import DashboardPage from './page/dashboardPage';
import MenuPage from './page/menuPage';
import MyInfoPage from './page/myInfoPage';
const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']", 
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  genericCombobox: ".oxd-select-text-input",
  secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
  thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
  dateCloseButton: ".--close",
  submitButton: ".orangehrm-left-space"
};

let userData;

before(() => {
cy.fixture('userData.json').then((data) => {
  userData = data;
});
});

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid);

    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest');
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest');
    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest');
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee');
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest');
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLincenseTest');
    cy.get(selectorsList.genericField).eq(7).clear({ force: true }).type('2025-03-10', { force: true });
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericField).eq(8).clear().type('sinNumbeTest');
    cy.get(selectorsList.submitButton).eq(0).click({ force: true });

    cy.get(selectorsList.genericCombobox).eq(2).click();
    cy.get(selectorsList.secondItemCombobox).click();
    cy.get(selectorsList.genericCombobox).eq(1).click();
    cy.get(selectorsList.thirdItemCombobox).click();
  });

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials');
  });

});