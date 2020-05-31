package com.orangeHrm.qa.runner;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="G:\\naresh practice\\nareshan23 eclipse workspace\\OrangeHrmTeam2\\src\\test\\resources\\features",
		glue="com.orangeHrm.qa.stepDefinations",
		plugin = {"pretty","html:test-output/cucmber_res"},
		dryRun = false,
		monochrome = true
		
		)
public class RunnerClass {
	

}
