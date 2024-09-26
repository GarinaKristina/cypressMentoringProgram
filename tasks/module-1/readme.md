# Lesson #1 - Initial setup and login implementation

## Setup your IDE

### In our example we will use VSCode

1. [Install VSCode](https://code.visualstudio.com/)
2. [Install NodeJS](https://nodejs.org/)
3. [Install GIT](https://git-scm.com/)
4. [Read a short article on how to work with nodeJS scripts](https://www.knowledgehut.com/blog/web-development/package-json-scripts-node-js)

### Note

- Create an account on GitHub (if it is not existed yet)
- Create new repository

## Initialization of framework

1. Create a branch called ‘login’
2. [Read documentation & follow steps](https://docs.cypress.io/guides/getting-started/installing-cypress)
3. Create .gitignore file and add node_modules folder to it
4. [Read the documentation on how to add a script to open Cypress](https://docs.cypress.io/guides/getting-started/opening-the-app>)
5. In the opened window select ‘E2E testing’ Chrome browser
   **DO NOT generate ‘Seaffold example specs’**

---

## Table with examples on how to obtain an elements

- Read an [article](https://docs.cypress.io/api/commands/get) on how to get selectors using Cypress

| Get an element by                        | Code example                           |
| ---------------------------------------- | -------------------------------------- |
| Header                                   | `cy.get('h1')`                         |
| Class                                    | `cy.get('.my-class')`                  |
| ID                                       | `cy.get('#my-id')`                     |
| Name                                     | `cy.get('input[name="field-name"]')`   |
| CSS selector with certain text           | `cy.get('.my-class').contains('text')` |
| First element containing a specific text | `cy.contains('text')`                  |

## Home task

1. Click ‘Create new spec’ and name it `login`
   - as a result you should receive `cypress/e2e/login.cy.js`
2. Modify your test in IDE to open the [page](https://opensource-demo.orangehrmlive.com/)
3. Obtain locators of **username** and **password** fields and using [type action](https://docs.cypress.io/api/commands/type)
4. Find locator of ‘Login’ button and using documentation of Cypress find on how to click on it
5. Rename your ‘describe’ an ‘it’ block to something more meaningful
6. Commit and push your code to the repository
7. Add your mentor to ‘Collaborators’
8. Notify your mentor
