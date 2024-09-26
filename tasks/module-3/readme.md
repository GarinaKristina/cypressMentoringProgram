# Lesson #3 - Working with cookies

## Home task

1. Create a new spec file called `cookies.cy.js`
2. Read the documentation on how to work with cookies in Cypress

   | Cookies request                                                  |
   |------------------------------------------------------------------|
   | [Get Cookie](https://docs.cypress.io/api/commands/getcookie)     |
   | [Get Cookies](https://docs.cypress.io/api/commands/getcookies)   |
   | [Set Cookie](https://docs.cypress.io/api/commands/setcookie)     |
   | [Clear Cookie](https://docs.cypress.io/api/commands/clearcookie) |
3. Read the documentation on how to work with [Assertions](https://docs.cypress.io/guides/references/assertions)
4. In created spec write test:
   * Visit the login page
   * Receive all cookies
     * Put into variable `beforeLoginCookies`
   * Get input for the user and password to fill them
   * Click the login button
   * Receive all cookies again
     * Put into variable `afterLoginCookies`
   * Compare two variables
   * Remove newly added cookie after login
   * Click on `Dashboard`
   * Assert that title `Admin area demo` is displayed
5. Commit and push your code to the repository
6. Add your mentor to ‘Collaborators’
7. Notify your mentor
