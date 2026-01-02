Feature: webdriveruniversity - contact us page

    ## is important describe that in the actual script we use
    ## WHEN, but here is need still "AND" for formal compreension

  @positive
  Scenario: Valid Contact us submission
    Given Navigate to the webdriver university homepage
    When click on contact us button
    And type a first name
    And type a last name
    And type a valid email address
    And type a comment
    And click in the submit button
    Then should present a loading page showing a message that the form was send successfuly.

   @negative
   Scenario: Invalid Contact us submission
    Given Navigate to the webdriver university homepage
    When click on contact us button
    And type a first name
    And type a last name
    And type a valid email address
    And type a comment
    And click in the submit button
    Then should present a loading page showing a message that the form was send successfuly.


   @negative
   Scenario: Empty Contact us submission
    Given Navigate to the webdriver university homepage
    When click on contact us button
    And click in the submit button
    Then should present a page with a message that all fields are required
  
   @alternative
   Scenario: Reset Contact us submission before user's responses
   Given Navigate to the webdriver university homepage
    When click on contact us button
    And click in the reset button
    And type a first name
    And type a last name
    And type a valid email address
    And type a comment
    And click in the submit button
    Then should present a loading page showing a message that the form was send successfuly.


   @alternative
   Scenario: Reset Contact us submission after user's responses
   Given Navigate to the webdriver university homepage
    When click on contact us button
    And type a first name
    And type a last name
    And type a valid email address
    And type a comment
    And click in the reset button
    And click in the submit button
    Then should present a page with a message that all fields are required
  
