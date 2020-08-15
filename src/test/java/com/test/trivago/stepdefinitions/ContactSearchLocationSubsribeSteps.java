package com.test.trivago.stepdefinitions;

import com.test.trivago.listener.Reporter;
import com.test.trivago.pageObjects.*;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.IOException;

import static com.test.trivago.pageObjects.BaseDriver.captureScreen;

public class ContactSearchLocationSubsribeSteps {
    private WebDriver driver;
    private SearchLocation searchLocation;
    private Subscribe subscribe;
    private Contact contact;


    @Before
    public void beforeScenario(Scenario scenario) {
        //Open URL
        BaseDriver baseDriver = new BaseDriver();
        driver = baseDriver.getDriver();
        //PageObjects
        searchLocation = new SearchLocation(driver);
        contact = new Contact(driver);
        subscribe = new Subscribe(driver);
        if (!scenario.getName().equals("")) {
            Reporter.assignAuthor("Laddu shashavali");
            Reporter.addScenarioLog("Scenario: " + scenario.getName());
        }
    }

    @Given("^Contact is visible$")
    public void contact_is_visible() throws Exception {
        Reporter.addStepLog("Contact Link in the application");
        contact.contactVisible();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ContactVisible</a>");
    }

    @When("^the user click on Contact$")
    public void the_user_click_on_contact() throws Exception {
        Reporter.addStepLog("Click Contact Link in the application");
        contact.clickContact();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickContact</a>");
    }

    @When("^the user enters (.+),(.+),(.+) data$")
    public void the_user_enters_and_data(String textarea, String fullname, String email) throws Exception {
        Reporter.addStepLog("Enter Fields in Contact Form in the application");
        contact.enterDataContactDetails(textarea, fullname, email);
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>EnterFields</a>");

    }

    @Then("^the user see the appropriate fields$")
    public void the_user_see_the_appropriate_fields() throws Exception {
        Reporter.addStepLog("Verify Fields in Contact Form in the application");
        contact.verifyFields();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>VerifyFields</a>");
    }

    @Then("^the user verify the actual subscribe message (.+)$")
    public void the_user_verify_the_actual_subscribe_message(String actualMessage) throws Exception {
        Reporter.addStepLog("Success message in the application");
        if (subscribe.verifySubscribeMessage(actualMessage)) {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        } else {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        }
    }

    @And("^the user check the Confirm checkbox$")
    public void the_user_check_the_confirm_checkbox() throws Exception {
        Reporter.addStepLog("Click cpnfirm button in the application");
        contact.clickConfirm();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickConfirm</a>");
    }

    @And("^the user click on Submit button$")
    public void the_user_click_on_submit_button() throws Exception {
        Reporter.addStepLog("Click submit button in the application");
        contact.clickSubmit();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickSubmit</a>");
    }
    @Then("^the user see the success message (.+)$")
    public void the_user_see_the_success_message(String message) throws Exception {
        Reporter.addStepLog("Success message in the application");
        if (contact.verifyMessage(message)) {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        } else {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        }
    }

    @When("^the user click on subscribe button$")
    public void the_user_click_on_subscribe_button() throws Exception {
        Reporter.addStepLog("subscribe button is clicked in the application");
        subscribe.clickSubscribeButton();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickSubMenuItem</a>");
    }

    @Then("^the user see subscribe button$")
    public void the_user_see_subscribe_menu() throws Exception {
        Reporter.addStepLog("Subscribe button in the application");
        subscribe.subscribeButtonVisible();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>subscribeButtonVisible</a>");
    }
    

    @When("^the user see the appropriate email field in subscribe$")
    public void the_user_see_the_appropriate_email_field_in_subscribe() throws Exception {
        Reporter.addStepLog("Appropriate fields are visible in the application");
        subscribe.emailFieldVisible();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>FieldSubscribe</a>");
    }

    @Then("^the user enter email (.+) data$")
    public void the_user_enter_email_data(String emailField) throws Exception {
        Reporter.addStepLog("Enter email in the application");
        subscribe.enteremail(emailField);
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>Enteremail</a>");
    }

    @Given("^Search button is visible$")
    public void search_button_Visible() throws Exception {
        Reporter.addStepLog("Search Icon or button is Visible");
        searchLocation.searchEnabled();
        Reporter.addScreenCaptureFromPath(captureScreen(driver), "SearchIcon");
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SearchIcon</a>");
    }

    @When("^the user see search icon enabled$")
    public void the_user_see_search_icon_enabled() throws Exception {
        Reporter.addStepLog("Click on Search icon");
        searchLocation.clickSearchIcon();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickSearchIcon</a>");
    }

    @Then("^the user enter (.+) in the search field$")
    public void the_user_enter_data_in_the_search_field(String data) throws Exception {
        Reporter.addStepLog("Enter data to search");
        searchLocation.enterDataSearch(data);
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>EnterData</a>");
    }

    @When("^the user click on search$")
    public void the_user_click_on_search() throws Exception {
        Reporter.addStepLog("Click on Search button to see the results");
        searchLocation.clickSearch();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>ClickSearchButton</a>");
    }

    @Then("^the user see the search results$")
    public void the_user_see_the_search_results() throws Exception {
        Reporter.addStepLog("Validating the results in the application");
        searchLocation.validateResults();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SearchResults</a>");
    }

    @Given("^Trivago is visible$")
    public void trivago_is_visible() throws Exception {
        Reporter.addStepLog("Trivago link is visible in the application");
        subscribe.trivagoVisible();
        Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>TrivagoLink</a>");
    }

    @And("^the user verify the Subscribe newsletter content (.+) is visible$")
    public void the_user_verify_the_subscribe_newsletter_content(String content) throws Exception {
        Reporter.addStepLog("Subscribe message in the application");
        if (subscribe.subscribeNewsletterContent(content)) {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        } else {
            Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>SuccessMessage</a>");
        }
    }

    @When("^the user click on Trivago button$")
    public void the_user_click_trivago() throws Exception {
        Reporter.addStepLog("Click Trivago link in the application");
        subscribe.clickTrivago();
    }

    @After
    public void afterScenario(Scenario scenario) throws Exception{
            if (scenario.isFailed()) {
                Reporter.addStepLog("<a href='" + captureScreen(driver) + "'>TestFail</a>");
                byte[] screenshotFail = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshotFail, "image/png");
            } else {
                byte[] screenshotPass = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshotPass, "image/png");
            }
            //Quit all Instances
            driver.quit();

    }
}
