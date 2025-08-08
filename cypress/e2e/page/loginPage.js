class LoginPage {
  selectors = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
  };

  accessLoginPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  loginWithUser(username, password) {
    cy.get(this.selectors.usernameField).type(username);
    cy.get(this.selectors.passwordField).type(password);
    cy.get(this.selectors.loginButton).click();
  }
}

export default new LoginPage();