# Lesson #5 - POM and general commands for reusability

## Home Task

### General commands for reusability

1. Inside `commands.js` file add new commands:
   * *"Login"* with `username` and `password` arguments
   * *"Navigate To"* with argument of the side menu options
   * "*Add New*" with argument of adding items from current page
        (e.g. Products -> add new; Categories -> Add New )
   * "*Select value*" with argument of drop down locator and value which should be selected
   * "*Open card block*" with argument of block name and button to open block

### POM creation

1. Create new folder `pages` inside cypress folder
2. Inside new folder create files:
   * Create new file `ProductsPage.js`
   * Create new file `CategoriesPage.js`
   * Create new file `ManufacturersPage.js`

### POM initialization

1. Inside `ProductsPage` create:
   * Class ProductsPage
   * Create a locator for every field from the `add new` form which switched from `Basic` to `Advanced` mode for these blocks only: Product Info, Prices, Shipping, and Inventory
   * Every input, checkbox, and select list should be used
   * Create a function for creating a new item
2. Inside `CategoriesPage` create:
   * Class CategoriesPage
   * Create a locator for every field from the `add new` form which switched from `Basic` to `Advanced` mode for these blocks only: Category info, Display, Mappings, SEO
   * Every input, checkbox and select list should be used
   * Create a function for creating a new item
3. Inside `ManufacturersPage` create:
   * Class ManufacturersPage
   * Create a locator for every field from the `add new` form which switched from `Basic` to `Advanced` mode for these blocks only: Manufacturer info, Display, Mappings, SEO
   * Every input, checkbox and select list should be used
   * Create a function for creating a new item

### Test Suites

1. Create a new branch
2. Create folder for POM suites
3. Create new spec for each POM
4. Name your ‘describe’ and ‘it’ blocks according to the scenarios you are working on
5. Import needed pages
6. Use page methods
7. Rewrite existing specs to POM
