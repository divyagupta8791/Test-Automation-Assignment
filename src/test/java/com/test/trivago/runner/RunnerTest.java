package com.test.trivago.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * A sample test for demonstration
 */

@RunWith(Cucumber.class)
@CucumberOptions(
    features = {"src/test/resources/features/"},
    glue = {"com.test.trivago.stepdefinitions"},
    monochrome = true,
    plugin = {"pretty","html:output/Reports","json:output/Reports.json","com.test.trivago.listener.ExtentCucumberFormatter:output/Report.html"}
)

public class RunnerTest {
    
}
