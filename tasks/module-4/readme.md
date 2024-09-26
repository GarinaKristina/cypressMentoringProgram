# Lesson #4 - Working with requests

## Home task

1. Create a new spec file called `requests.cy.js`
2. Read the documentation on how to work with [requests](https://docs.cypress.io/api/commands/request) in Cypress (*also take a quick look into dev* [guide](https://docs.cypress.io/guides/guides/network-requests))
3. Open additional terminal (you should have 2 terminals opened)
    * run `node tasks/module-4/utils/API/server.js`
    * Server is running: `Server is listening on port 3000`
    * **Data sent to the server will be stored and available only while the server is running. After the server shutdown or restart, all stored data would be lost.**
4. In created spec write the next scenario:
    * `NOTE: All your tests should run without failing on the server with and without any data in it!`
    * Create POST request <localhost:3000/items>
        * Send it with a body containing `id`, `data` object with `title` and `price` fields
        * Add assertion to check status code is equal to 201 and the response contains the message `Item created successfully`
    * Create the same POST request as in the previous step
        * Add assertion to check status code is equal to 409 and the response contains an error message with the text `Item with the same id already exists`
    * Create `GET` request <localhost:3000/items/ID> to obtain created data
        * Add assertion to check status code is equal to 200 and the response contains `title` and `price` fields with data you've sent previously
    * Create `PUT` request <localhost:3000/items/ID>
        * Add assertion to check status code is equal to 200 and the message is `Item updated successfully`
        * Add assertion to check that if any of the fields is not provided you will receive an error message `Both title and price are required`
        * Add `GET` request with assertion, to confirm that title and price changed
    * Create `DELETE` request <localhost:3000/items/ID>
        * Add assertion to check status code is equal to 200 and the message is `Item was successfully deleted`
        * Add assertion to check message when deleting the nonexisting ID
5. In the same spec add the following scenario:
    * Create an intercept request <localhost:3000/items/*>
        * Status code should differ from standard
        * Body should contain an object that differs from original
    * As a result of interception, you should receive a response you've created in the previous step
    * Add an assertion to check that page contains text from your interception
6. Commit and push your code to the repository
7. Add your mentor to ‘Collaborators’
8. Notify your mentor
