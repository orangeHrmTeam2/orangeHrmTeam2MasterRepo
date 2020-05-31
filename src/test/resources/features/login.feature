Feature: Login into orangeHrm application

Background:
Given User launch the browser
And user enters URL

Scenario Outline: login with valid credentials
Given user enter user name as <userName> and password as <password>
And user click login button
Then user should see his home page and his user name as <userName>
And close the browser

Examples:
|userName|password|
|Admin	 |admin123|
|Admin	 |admin123|


