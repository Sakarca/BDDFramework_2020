@web

  Feature: Login feature

    Background:
      Given I am on home page

      @login

     Scenario Outline: Verify invalid login for multiple users

        When I enter <username> into username text fields on home screen
        And I enter <password> into password text fields on home screen
        And I click on login button on home screen
        Then I verify that I am in invalid login page

        Examples:
          | username        |password |
          | ilhan@sample.com | test123 |
          | hasan@sample.com | abc@123 |
          | ismet@sample.com | 456@wer |