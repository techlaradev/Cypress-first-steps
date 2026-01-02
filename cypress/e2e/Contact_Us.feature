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

  Scenario: Valid Contact us submission - Specific Inputs
    Given Navigate to the webdriver university homepage
    When click on contact us button
    And type a first name like "Lara Ayne"
    And type a last name like "Cardoso de Souza"
    And type a valid email address like "maria-luiza-maciel@tuamaeaquelaursa.com"
    And type a comment like "inhai bicha" and type a number 7
    And click in the submit button


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





