# Demo Project Cypress

## Test Setup

Node.js should be installed 
Required packages will be installed automatically as:
    -[] Navigate to project's folder in command prompt
    -[] Execute following command:
        npm install 

## Run Tests

To execute login tests, use following command:
    - `npm run cy:run_login_tests {name_of_browser}`
    
e.g. to execute tests on chrome, use command as: `npm run cy:run_login_tests chrome`
Similarly, for Firefox and Edge, use `firefox` and `edge` respectively


To execute e2e purchase flow:
    - `npm run cy:run_e2e_purchase_tests {name_of_browser}`

To execute all tests in one go:
    - `npm run cy:run_all_tests {name_of_browser}`

## Custom Report

Custom report can be generated for any execution via executing following command on project's directory:
    - node cypress\cucumber-html-report.js

Report will be generated on location: `\reports\cucumber-html-report\index.html`

#### Note
It might take a bit more time while executing tests on first time
