$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 2,
  "name": "Contact Feature",
  "description": "",
  "id": "contact-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@contactTag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Customer to send the Query in Contact form and validate whether he is able to send the Query",
  "description": "",
  "id": "contact-feature;customer-to-send-the-query-in-contact-form-and-validate-whether-he-is-able-to-send-the-query",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@contact"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Contact is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user click on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user see the appropriate fields",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters \u003ctextArea\u003e,\u003cfullname\u003e,\u003cemail\u003e data",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user check the Confirm checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user see the success message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "contact-feature;customer-to-send-the-query-in-contact-form-and-validate-whether-he-is-able-to-send-the-query;",
  "rows": [
    {
      "cells": [
        "textArea",
        "fullname",
        "email",
        "message"
      ],
      "line": 15,
      "id": "contact-feature;customer-to-send-the-query-in-contact-form-and-validate-whether-he-is-able-to-send-the-query;;1"
    },
    {
      "cells": [
        "This is for testing purpose",
        "Divya Gupta",
        "divgup8791@gmail.com",
        "Message Sent Successfully!"
      ],
      "line": 16,
      "id": "contact-feature;customer-to-send-the-query-in-contact-form-and-validate-whether-he-is-able-to-send-the-query;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8896518650,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Customer to send the Query in Contact form and validate whether he is able to send the Query",
  "description": "",
  "id": "contact-feature;customer-to-send-the-query-in-contact-form-and-validate-whether-he-is-able-to-send-the-query;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@contact"
    },
    {
      "line": 1,
      "name": "@contactTag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Contact is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user click on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user see the appropriate fields",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters This is for testing purpose,Divya Gupta,divgup8791@gmail.com data",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user check the Confirm checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user see the success message Message Sent Successfully!",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.contact_is_visible()"
});
formatter.result({
  "duration": 7088369872,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_click_on_contact()"
});
formatter.result({
  "duration": 10985978324,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_the_appropriate_fields()"
});
formatter.result({
  "duration": 26916182998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is for testing purpose",
      "offset": 16
    },
    {
      "val": "Divya Gupta",
      "offset": 44
    },
    {
      "val": "divgup8791@gmail.com",
      "offset": 56
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_enters_and_data(String,String,String)"
});
formatter.result({
  "duration": 21172558291,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_check_the_confirm_checkbox()"
});
formatter.result({
  "duration": 6904818521,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_click_on_submit_button()"
});
formatter.result({
  "duration": 6844409105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message Sent Successfully!",
      "offset": 33
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_the_success_message(String)"
});
formatter.result({
  "duration": 8771134414,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 329174084,
  "status": "passed"
});
formatter.uri("SearchLocation.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Search Feature",
  "description": "",
  "id": "home-page-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@homePageTag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search Destination in Search Icon and validate the results",
  "description": "",
  "id": "home-page-search-feature;search-destination-in-search-icon-and-validate-the-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Search button is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user see search icon enabled",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enter \u003cdata\u003e in the search field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user click on search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user see the search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "home-page-search-feature;search-destination-in-search-icon-and-validate-the-results;",
  "rows": [
    {
      "cells": [
        "data"
      ],
      "line": 13,
      "id": "home-page-search-feature;search-destination-in-search-icon-and-validate-the-results;;1"
    },
    {
      "cells": [
        "Asia"
      ],
      "line": 14,
      "id": "home-page-search-feature;search-destination-in-search-icon-and-validate-the-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4113862546,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Destination in Search Icon and validate the results",
  "description": "",
  "id": "home-page-search-feature;search-destination-in-search-icon-and-validate-the-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@search"
    },
    {
      "line": 1,
      "name": "@homePageTag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Search button is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user see search icon enabled",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enter Asia in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user click on search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user see the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.search_button_Visible()"
});
formatter.result({
  "duration": 7981317875,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_search_icon_enabled()"
});
formatter.result({
  "duration": 8859737701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asia",
      "offset": 15
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_enter_data_in_the_search_field(String)"
});
formatter.result({
  "duration": 7053793289,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_click_on_search()"
});
formatter.result({
  "duration": 350705180,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_the_search_results()"
});
formatter.result({
  "duration": 1177559018,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 371431046,
  "status": "passed"
});
formatter.uri("Subscribe.feature");
formatter.feature({
  "line": 3,
  "name": "Subscribe Feature",
  "description": "",
  "id": "subscribe-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@subscribeTag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Subscribe to the NewsLetter and validate the success message",
  "description": "",
  "id": "subscribe-feature;subscribe-to-the-newsletter-and-validate-the-success-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@subscribe"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Trivago is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user click on Trivago button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user verify the Subscribe newsletter content \u003ccontent\u003e is visible",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user see the appropriate email field in subscribe",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user see subscribe button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user enter email \u003cemailField\u003e data",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the user click on subscribe button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user verify the actual subscribe message \u003cActual message\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "subscribe-feature;subscribe-to-the-newsletter-and-validate-the-success-message;",
  "rows": [
    {
      "cells": [
        "content",
        "",
        "emailField",
        "",
        "actualMessage"
      ],
      "line": 17,
      "id": "subscribe-feature;subscribe-to-the-newsletter-and-validate-the-success-message;;1"
    },
    {
      "cells": [
        "Want to receive exclusive hotel offers? Subscribe to our newsletter!",
        "",
        "lifetry0989@mail.com",
        "",
        "Thanks for subscribing to the trivago newsletter. We have sent you an email to confirm your registration. If you do not see it in your inbox, please also check your spam folder. Happy hotel hunting!"
      ],
      "line": 18,
      "id": "subscribe-feature;subscribe-to-the-newsletter-and-validate-the-success-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4211643716,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Subscribe to the NewsLetter and validate the success message",
  "description": "",
  "id": "subscribe-feature;subscribe-to-the-newsletter-and-validate-the-success-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@subscribe"
    },
    {
      "line": 1,
      "name": "@subscribeTag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Trivago is visible",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user click on Trivago button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user verify the Subscribe newsletter content Want to receive exclusive hotel offers? Subscribe to our newsletter! is visible",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user see the appropriate email field in subscribe",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user see subscribe button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user enter email lifetry0989@mail.com data",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the user click on subscribe button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user verify the actual subscribe message \u003cActual message\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.trivago_is_visible()"
});
formatter.result({
  "duration": 6874765683,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_click_trivago()"
});
formatter.result({
  "duration": 6755938630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Want to receive exclusive hotel offers? Subscribe to our newsletter!",
      "offset": 49
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_verify_the_subscribe_newsletter_content(String)"
});
formatter.result({
  "duration": 11726150193,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_the_appropriate_email_field_in_subscribe()"
});
formatter.result({
  "duration": 8832181305,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_see_subscribe_menu()"
});
formatter.result({
  "duration": 8869724795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lifetry0989@mail.com",
      "offset": 21
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_enter_email_data(String)"
});
formatter.result({
  "duration": 7007676815,
  "status": "passed"
});
formatter.match({
  "location": "ContactSearchLocationSubsribeSteps.the_user_click_on_subscribe_button()"
});
formatter.result({
  "duration": 7039195429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cActual message\u003e",
      "offset": 45
    }
  ],
  "location": "ContactSearchLocationSubsribeSteps.the_user_verify_the_actual_subscribe_message(String)"
});
formatter.result({
  "duration": 20153483593,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Thanks for subscribing\u0027)]\"}\n  (Session info: chrome\u003d84.0.4147.125)\n  (Driver info: chromedriver\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706),platform\u003dLinux 5.4.0-42-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027a\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578700 (2f1ed5f9343c13..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:40417}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 84.0.4147.125, webStorageEnabled: true}\nSession ID: 93727fa4131f0ee6fb9f7c1aff5570f4\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Thanks for subscribing\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\n\tat com.test.trivago.pageObjects.BaseDriver.scrollintoviewElement(BaseDriver.java:211)\n\tat com.test.trivago.pageObjects.Subscribe.verifySubscribeMessage(Subscribe.java:88)\n\tat com.test.trivago.stepdefinitions.ContactSearchLocationSubsribeSteps.the_user_verify_the_actual_subscribe_message(ContactSearchLocationSubsribeSteps.java:74)\n\tat ✽.Then the user verify the actual subscribe message \u003cActual message\u003e(Subscribe.feature:13)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 708118492,
  "status": "passed"
});
});