# Lesson #2 - Configuration settings

## Home Task

### Cypress Customers suite

1. Create a new branch
2. Click ‘Create new spec’ and name it `customers`
   * as a result you should receive `cypress/e2e/customers.cy.js`
3. Name your ‘describe’ and ‘it’ blocks according to the scenario you are working on
4. In created spec write test:
   * Visit the `Customers` inside the Customers side menu in `before` hook block
   * Click on `Add New` button
   * Fill `Email`
     * Assert that the input `Email` contains the provided `email`
   * Fill `Password`
     * Assert that the input `Password` contains the provided `Password`
   * Fill `First Name`
     * Assert that the input `First Name` contains the provided `First Name`
   * Fill `Last Name`
     * Assert that the input `Last Name` contains the provided `Last Name`
   * Select `Gender`
     * Assert that the radio box `Gender` contains the selected `Gender`
   * Change `Date of Birth`
     * Assert that the input `Date of Birth` contains the provided `Date of Birth`
   * Fill `Company name`
     * Assert that the input `Company name` contains the provided `Company name`
   * Select `Is tax exempt` checkbox
     * Assert that the checkbox `Is tax exempt` is selected
   * Assert that the checkbox `Active` is selected
5. Click `Save` button

### Cypress configuration

1. Intention of this session is to give you knowledge on how to configure a dashboard and multi-browser execution
     * Note for free it only accepts 500 test results, so you need to look at the left amount in your dashboard.
2. Navigate to the [cloud](https://cloud.cypress.io/login)
3. Create account
4. After successful authorization, it will open the page with the needed configuration, follow the steps to make it work
5. After configuration, execute the command to run and store results in the cloud
   * Results should be available in the cloud
6. Prevent Cypress from recording video inside the configuration.
7. Change Cypress default timeout to some value
8. Make your tests be executed in [2 browsers](https://docs.cypress.io/guides/guides/cross-browser-testing) (NOT at the same time, for Cypress it’s impossible)
9. Add inside your ‘login’ spec [debugging](https://docs.cypress.io/guides/guides/debugging) for password input
10. Add inside `customers` spec debugging for `password` input
11. Commit and push your code to the repository
12. Add your mentor to ‘Collaborators’
13. Notify your mentor
