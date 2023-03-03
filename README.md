# Team OOE Automate, Percy and Observability Repository
[WebdriverIO](http://webdriver.io/) Integration with BrowserStack.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src = "https://webdriver.io/img/webdriverio.png" height = "100">

## Setup
* Clone the repo
* Install dependencies `npm install`
* You can setup environment variables for all sample repos (see Notes) or update `*.conf.js` files inside the `conf/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)

## Percy
* Navigate to [Percy.io](https://percy.io/) and create a new Web project
* Export Percy token into local machine or CI tool 
* Ex: `export PERCY_TOKEN=<token>`
* Update the test invocation commands inside of your `package.json` file to run with percy ex: `percy exec -- wdio conf/test.conf.js`

## Observability
* Navigate to the [WebDriverIO Observability Integration Documentation](https://www.browserstack.com/docs/test-observability/quick-start/webdriverio) and follow these steps to 


## Running your tests
- To run parallel tests, run `npm run test`
- To run local test, run `npm run local`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your Automate test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* You can view your Percy test results on the [BrowserStack Percy dashboard](https://percy.io/)
* You can view your Observability test results on the [BrowserStack Observability dashboard](https://observability.browserstack.com/)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/capabilities)
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)

