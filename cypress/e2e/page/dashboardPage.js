class DashboardPage {
  selectors = {
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(this.selectors.dashboardGrid).should('be.visible');
  }
}

export default new DashboardPage();