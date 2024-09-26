# Lesson #7 - Configuration of linters

## Home task

1. Packages installation:
    * Install [ESLint](https://eslint.org/)
    * Install [Prettier](https://prettier.io/)
    * Install [Husky](https://typicode.github.io/husky/)
2. Configure them `ESLint` + `Prettier` so they wouldn't conflict with each other
    * `NOTE`: that configuration file extension for both linters should be *.js
3. For the ESLint configuration, use the so-called `flat` configuration
    * extend default ESLint recommended rules
    * support the latest ECMA version
    * only work on folders within your framework except 'node_modules'
4. General style rules (`should be done in separate file`):
    * every line in objects should contain "final commas"
    * semi in the end of lines shouldn't be present (*this setting shouldn't be present in ESLint configuration*)
    * all quotes whenever possible should be single
    * end of line format should be `lf`
    * every file should automatically set a new line at the end of it
    * maximum line length should be no longer than 150 symbols
    * charset for all files should be `utf-8`
    * all whitespace should be deleted
5. Create [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig) file in the root of your project
    * module and target should resolve as the 'latest' available
    * aliases for your commonly used files and folders should be added
    * strictFunctionTypes should be included
    * NOTE: to bypass `webpack` compilation error switch preprocessor to `esbuild`
6. Add `Allure` and `Mochawesome` reporters to your project
    * both reports should be generated in `report_results` folder
    * mochawesome report should contain information about all specs not only about the last one
    * all configurations should be placed in cypress config file
    * for both reporters should be script command to generate report (and open it for allure)
    * `report_result` folder should be ignored
    * script to clear `report_results` folder should be present
