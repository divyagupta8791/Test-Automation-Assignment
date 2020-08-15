	@homePageTag
Feature: Home Page Search Feature

  @search
  Scenario Outline: Search Destination in Search Icon and validate the results
     Given Search button is visible
     When the user see search icon enabled
     Then the user enter <data> in the search field
     When the user click on search
     Then the user see the search results

   Examples:
    | data |
    | Asia |

