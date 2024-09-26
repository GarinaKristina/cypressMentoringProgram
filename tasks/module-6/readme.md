# Lesson #6 - POC design pattern implementation

## Home Task

### BaseComponent component implementation

1. Create new folder `components` inside cypress folder
2. Inside new folder create files for every component you will work with:
   * Button
   * Input
   * etc
3. Let's implement base class for all your components:
    * Create default class `BaseComponent`
    * Into constructor pass `locator` field
    * Implement common component methods that would be used across application
        (e.g. check element text)

### Button component implementation

1. Inside `Button` file component create:
   * Class `Button` that extends `BaseComponents`
   * Into constructor of the class pass `locator` field
   * `locator` field should accept default value or your own
   * Create methods to interact with (e.g. `click()`)

### Re-export components

1. Create `index.js` file inside `components` folder
2. Import every component into this file
3. Export every imported component

### Base page implementation

1. Create a `BasePage` inside `pages` folder
2. Add constructor with all components that exist on every page (e.g. Navigation)
3. Move common logic functions into this page

### Re-wright other pages' implementation

1. Every existing page should extend from base page
2. Existing page methods should use components
3. Fix steps in specs, to follow new design pattern
