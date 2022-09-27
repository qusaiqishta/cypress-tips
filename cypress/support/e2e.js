import "cypress-axe"
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')