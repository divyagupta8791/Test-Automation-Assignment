	@subscribeTag

Feature: Subscribe Feature
    @subscribe
    Scenario Outline: Subscribe to the NewsLetter and validate the success message
    Given Trivago is visible
    When the user click on Trivago button
    And the user verify the Subscribe newsletter content <content> is visible
    When the user see the appropriate email field in subscribe
    And the user see subscribe button
    Then the user enter email <emailField> data
    Then the user click on subscribe button
    Then the user verify the actual subscribe message <Actual message>


    Examples:
    | content || emailField || actualMessage|
    | Want to receive exclusive hotel offers? Subscribe to our newsletter! || lifetry0989@mail.com || Thanks for subscribing to the trivago newsletter. We have sent you an email to confirm your registration. If you do not see it in your inbox, please also check your spam folder. Happy hotel hunting!|
