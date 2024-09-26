# Lesson #9 - Working with tables

## Home task

1. Implement the possibility of working with tables
2. On the `Content management` > `Topics (pages)`
    * You should be able to find the row with a specific value(s)
    * You should be able to find cell(s) with specific value(s) in column(s)
    * Your method should be able to work when all columns are specified or only 1 column is specified
    * Logic should be the following:
        * Find the table on the page
        * Collect all columns from the table -> assign indexes to every found column
        * Compare columns from the test to columns that were found on the page
        * Grab 1st row from the table
        * Start comparing values specified in test columns
        * On the first mismatch move to the next row
        * If all values are pass conditions -> stop function execution
3. Write some tests:
    * find a row where 2 checkboxes equal `true` and `Display order` 10
    * find a row with value `Display order` 15
    * find a row with the name `PageNotFound` and click on the `Edit` button > On the loaded page make an assertion for the header
