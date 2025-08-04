@login @api
Feature: Authentication API
  Scenario: User login successfully
    Given I login with email "eve.holt@reqres.in" and password "cityslicka"
    Then the response status should be 200
    And the response should contain a token
    And the response header "content-type" should contain "application/json"
