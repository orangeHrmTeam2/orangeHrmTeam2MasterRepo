package com.orangeHrm.qa.basePage;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class OrangeHrmBasePage {
	private Properties prop;
	private WebDriver driver;
	String projectPath = System.getProperty("user.dir");

	public OrangeHrmBasePage() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(projectPath+"//src/main/resources/PropertiesFile/config.properties");
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public WebDriver intilizeDriver() {
		if (prop.getProperty("browser").equals("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if (prop.getProperty("browser").equals("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		} else if (prop.getProperty("browser").equals("internetExplorer")) {
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
		}else if (prop.getProperty("browser").equals("edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		}
		driver.manage().window().maximize();
		return driver;
	}

	public void enterURL() {
		driver.get(prop.getProperty("url"));
		//return new LandingPage(driver);
	}


}
