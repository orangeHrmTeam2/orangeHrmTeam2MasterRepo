package com.orangeHrm.qa.stepDefinations;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class sampleDemoStepDeff {
	@Given("User launch the browser")
	public void user_launch_the_browser() {
		System.out.println("chrome browser");
	}
	@Given("user enters URL")
	public void user_enters_URL() {
		System.out.println("url is orange demo");
	}
	@Given("user click login button")
	public void user_click_login_button() {
		System.out.println("user clicked");
	}
	@Then("close the browser")
	public void close_the_browser() {
		System.out.println("user closed the browser");
	}
    @Given("^user enter user name as (.+) and password as (.+)$")
    public void user_enter_user_name_as_and_password_as(String username, String password) throws Throwable {
    	System.out.println("password is :"+password);
		System.out.println("user name is :"+username);
    }
    @Then("^user should see his home page and his user name as (.+)$")
    public void user_should_see_his_home_page_and_his_user_name_as(String username) throws Throwable {
    	System.out.println("present user on home page");
		System.out.println("password is "+username);
    }

}
