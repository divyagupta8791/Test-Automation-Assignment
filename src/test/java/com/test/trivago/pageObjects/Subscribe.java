package com.test.trivago.pageObjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import com.test.trivago.listener.Reporter;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.openqa.selenium.WebElement;


import static com.test.trivago.pageObjects.BaseDriver.*;
//import static com.test.trivago.pageObjects.BaseDriver.fluientWaitforElement;
import static com.test.trivago.pageObjects.BaseDriver.scrollintoviewAndClickElement;
import static com.test.trivago.pageObjects.BaseDriver.scrollintoviewElement;

//import com.mongodb.annotations.Beta;

public class Subscribe {
    private WebDriver driver;
    //Locators
    @FindBy(how = How.XPATH, using = "//*[text()='trivago']")
    public WebElement trivagoLink;
    @FindBy(how = How.XPATH, using = "//*[@class='alert-error et-confirm-error']")
    public WebElement confirmAttribute;
    @FindBy(how = How.XPATH, using = "//input[@value='Subscribe']")
    public WebElement subscribeButton;
    @FindBy(how = How.XPATH, using = "//p[contains(text(),'Want to')]")
    public WebElement subscribeContent;
    @FindBy(how = How.XPATH, using = "//input[@name='email']")
    public WebElement emailId;
    @FindBy(how = How.XPATH, using = "//*[@class='newsletter-submit']/button[@class='submit']")
    public WebElement submit;
    @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Thanks for subscribing')]")
    public WebElement SubscribeSuccessMsg;

    //Constructor
    public Subscribe(WebDriver driver) {
        this.driver = driver;
        //Initialise Elements
        PageFactory.initElements(driver, this);
    }
    public Boolean subscribeNewsletterContent(String content) throws Exception {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("window.scrollBy(0,250)", "");
        scrollintoviewElement(driver, subscribeContent);
        return subscribeContent.getText().toUpperCase().trim().equals(content.toUpperCase().trim());
    }
    public void clickTrivago() throws Exception {
        //Click contact
        scrollintoviewAndClickElement(driver, trivagoLink);
        //Switch to the new window
        switchWindow(driver);
    }
    public void trivagoVisible() throws Exception {
        //Contact is visible
        scrollintoviewElement(driver, trivagoLink);
        Reporter.addStepLog("trivago link is visible and clickable in the application");
    }
    public void emailFieldVisible() throws Exception {
        Thread.sleep(2000);
        scrollintoviewElement(driver, emailId);
        Assert.assertTrue((emailId.isDisplayed() && emailId.isEnabled()),"email field");
    }
    public void subscribeButtonVisible() throws Exception {
        Thread.sleep(2000);
        scrollintoviewElement(driver, subscribeButton);
        Assert.assertTrue((subscribeButton.isDisplayed() && subscribeButton.isEnabled()),"email field");
    }

    public void clickSubscribeButton() throws Exception {
        //Click confirm
        scrollintoviewAndClickElement(driver,subscribeButton);
    }

    //Enter email
    public void enteremail(String emailField) throws Exception {
        scrollintoviewElement(driver, emailId);
        emailId.clear();
        emailId.sendKeys(emailField);
    }
    
  //Verify message 'Thanks for subscribing to the trivago newsletter. We have sent you an email to confirm your registration. If you do not see it in your inbox, please also check your spam folder. Happy hotel hunting!'
    public Boolean verifySubscribeMessage(String actualMessage) throws Exception {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("window.scrollBy(0,700)", "");
        scrollintoviewElement(driver, SubscribeSuccessMsg);
        return SubscribeSuccessMsg.getText().toUpperCase().trim().equals(actualMessage.toUpperCase().trim());
    }
}