Feature: webdriveruniversity - contact us page

  Scenario: Valid Contact us submission
    Given Navigate to the webdriveruniversity homepage
    When click on contact us button

  ## is important describe that in the actual script we use
  ## WHEN, but here is need still "AND"for formal compreension 

    And type a first name
    And type a last name
    And type a valid email address
    And type a comment
    And click in the submit button
    Then should present a loading page showing a message that the form was send successfuly.
