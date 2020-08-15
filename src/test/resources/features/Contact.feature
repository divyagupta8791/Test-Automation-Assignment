	@contactTag
Feature: Contact Feature

  @contact
  Scenario Outline: Customer to send the Query in Contact form and validate whether he is able to send the Query
  Given Contact is visible
  When the user click on Contact
  Then the user see the appropriate fields
  When the user enters <textArea>,<fullname>,<email> data
  And the user check the Confirm checkbox
  And the user click on Submit button
  Then the user see the success message <message>

  Examples:
 | textArea | fullname | email | message |
 | This is for testing purpose| Divya Gupta | divgup8791@gmail.com | Message Sent Successfully! |



