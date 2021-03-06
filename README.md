---

# Volvo  Test Automation Framework 
Test automation framework infrastructure for running automated tests in Volvo Website

---

## Table of Contents
- [Description](#description)
- [Features and Content](#features-and-content)
- [Directory Structure](#directory-structure)
- [Installation Requirements](#installation-requirements)
- [Installation](#installation)
- [Test Case List](#test-case-list)
- [Building Docker Image Using Dockerfile](#building-docker-image-using-dockerfile)
- [Test Case Execution](#test-case-execution)
- [Test Reporting](#test-reporting)

---

## Description
This framework contains configuration files, page objects, test data, test cases, and corresponding keywords/methods for automating Volvo Website

---

## Features and Content
   1. Page-object model structure for improved code reusability, readability, and maintenance
   2. Parallel execution
   3. Single step test execution
   4. Allure report autogeneration and display
   5. Ready support for cross-browser testing (Chrome and Firefox) (only available on non-headless mode, need to modify capabilities section of wdio.conf.js to enable)

---

## Directory Structure
   1. [Test] - contains test-related resources
      1. [spec] - contains test case automated scripts used in Test Execution separated according to test case number and suite with the format (TCXXXX Test Case Description)
      2. [pageobjects] -  contains specific page operation selectors and keywords that are used to interact with target application
   2. [allure-report] - contains resources used for allure reporting
   3. [allure-results] - contains .json files generated on test execution used for allure report generation
   4. [node modules] - contains cached dependency resources used for test execution
   5. [package*.json] - contains metadata including list of library/package dependencies required for test execution
   6. [wdio.conf.js] - configuration file used for test execution including runner and test configurations, capabilities, and hooks
   7. [Dockerfile] - contains script needed to generate docker image
   8. [run.sh] - shell script used for test execution and automatic allure report cleanup and generation

---

## Installation Requirements
   1. "node.js": "^16.11.1",
   2. "@wdio/allure-reporter": "^7.14.1",
   3. "@wdio/cli": "^7.14.1",
   4. "@wdio/local-runner": "^7.14.1",
   5. "@wdio/mocha-framework": "^7.14.1",
   6. "@wdio/selenium-standalone-service": "^7.14.1",
   7. "@wdio/spec-reporter": "^7.14.1",
   8. "chromedriver": "^94.0.0",
   9. "wdio-chromedriver-service": "^7.2.2"

---

## Installation
   1. Install Chrome browser
   2. Install node.js
   3. Checkout test automation repository from Github
   4. Create docker image (see [Building Docker Image Using Dockerfile](#building-docker-image-using-dockerfile)) and/or if running locally, install other packages/dependencies as defined in packages.json

---

## Test Case List
   1. **TC0001 - Main Page Loading and Cookie Container Verification**
      1. should verify url and title
      2. should show the cookies container and accept all cookies
   2. **TC0002 - Navigation Top Bar Verification**
      1. should show top navigation bar and elements
      2. should show and verify the cars container when Our Cars text is clicked
      3. should show and verify the side nav container when side nav button is clicked
   3. **TC0003 - Main Page Element Verification - Model Intro**
      1. should show and verify the model intro header and text
   4. **TC0004 - Main Page Element Verification - Main Video**
      1. should show and verify the main video if autoplayed and points to correct playback source
   5. **TC0005 - Main Page Element Verification - Text Statement**
      1. should show and verify the text statement
   6. **TC0006 - Main Page Element Verification - Icon Callouts**
      1. should show and verify the speed cap icon callouts icon visibility, title value, and text value
      2. should show and verify the highway pilot icon callouts icon visibility, title value, and text value
      3. should show and verify the driver monitoring cameras icon callouts icon visibility, title value, and text value
      4. should show and verify the care key icon callouts icon visibility, title value, and text value
      5. should show and verify the learn more about safety text field
      6. should show and verify the icon callouts footer
   7. **TC0007 - Main Page Element Verification - Video Testimonials**
      1. should show and verify the video testimonials header and description
      2. should show and verify the video testimonials video, source, play button, title, and description
   8. **TC0008 - Main Page Element Verification - Decades Of Innovation Section**
      1. should show and verify the decades of innovation section title and description
      2. should show and verify the decades of innovation section learn more button
      3. should show and verify the decades of innovation section image
   9. **TC0009 - Main Page Element Verification - Product List Carousel**
      1. should show and verify the product list carousel header
      2. should show and verify the product list carousel pagination buttons
      3. should show and verify the product list carousel items
      4. should show and verify the product list carousel recharge button
      5. should show and verify the product list carousel mild hybrid cars button
   10. **TC0010 - Main Page Element Verification - Disclaimer**
       1. should show and verify the disclaimer text and description
   11. **TC0011 - Main Page Element Verification - Site Footer**
       1. should show and verify the site footer text and hyperlinks
       2. should show and verify the site footer copyright
   
---

## Building Docker Image Using Dockerfile
   1. Make sure docker is installed and running (systemctl status docker)
   2. From the Project Directory
```
   docker build -t <docker image name>:<version number> .
   example: docker build -t volvotestautomation:v2.0 .  
```
   3. Check new image generated
```
   docker images <docker image name>:<version number>
   example: docker images volvotestautomation:v2.0
```

---

## Test Case Execution
   1. Using shell script from Project Directory
```
   bash run.sh <Test Case ID/Name | if left empty will run all test cases>
   example: bash run.sh TC0001
```
   2. Using docker image generated (see [Building Docker Image Using Dockerfile](#building-docker-image-using-dockerfile))
```
   docker run -it <docker image name>:<version number> <Test Case ID/Name | if left empty will run all test cases>
   example: docker run -it volvotestautomation:v2.0 TC0001
```   
   
---

## Test Reporting
Reports are automatically generated using allure reporting.
- When running tests using shell script, allure report is automatically opened in the default browser.
- When running tests using docker image, an instruction to open allure report through a link (link may vary accordingly) is given at the end of the execution
```
   example: 
   You can use the link below to open the report manually.
   Server started at <http://172.17.0.2:33169/>.
```

--

For more details Please see:
- [WebdriverIO](https://webdriver.io/)
   
---
