class MyInfoPage {
  selectors = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    nickNameField: "(//input[@class='oxd-input oxd-input--active'])[3]",
    employeeIdField: "(//input[@class='oxd-input oxd-input--active'])[4]",
    otherIdField: "(//input[@class='oxd-input oxd-input--active'])[5]",
    driversLicenseField: "(//input[@class='oxd-input oxd-input--active'])[6]",
    sinNumberField: "(//input[@class='oxd-input oxd-input--active'])[7]",
    saveButton: ".oxd-button--secondary",
    maritalStatusDropdown: "(//div[@class='oxd-select-text-input'])[2]",
  };

  fillPersonalDetails(firstName, lastName, nickName) {
    cy.get(this.selectors.firstNameField).clear().type(firstName);
    cy.get(this.selectors.lastNameField).clear().type(lastName);
    cy.xpath(this.selectors.nickNameField).clear().type(nickName);
  }

  fillEmployeeDetails(employeeId, otherId, driversLicense, sinNumber) {
    cy.xpath(this.selectors.employeeIdField).clear().type(employeeId);
    cy.xpath(this.selectors.otherIdField).clear().type(otherId);
    cy.xpath(this.selectors.driversLicenseField).clear().type(driversLicense);
    cy.xpath(this.selectors.sinNumberField).clear().type(sinNumber);
  }

  saveForm() {
    cy.get(this.selectors.saveButton).click();
  }

  fillStatus() {
    cy.xpath(this.selectors.maritalStatusDropdown).click();
    cy.contains('Single').click();
  }
}

export default new MyInfoPage();
