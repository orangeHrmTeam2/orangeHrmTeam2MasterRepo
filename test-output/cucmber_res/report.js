$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login into orangeHrm application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter user name as \u003cuserName\u003e and password as \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should see his home page and his user name as \u003cuserName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_enters_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter user name as Admin and password as admin123",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_enter_user_name_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see his home page and his user name as Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_should_see_his_home_page_and_his_user_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_enters_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter user name as Admin and password as admin123",
  "keyword": "Given "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_enter_user_name_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see his home page and his user name as Admin",
  "keyword": "Then "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.user_should_see_his_home_page_and_his_user_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.orangeHrm.qa.stepDefinations.sampleDemoStepDeff.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});