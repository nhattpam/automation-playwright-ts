@inventory @api
Feature: Inventory API
  Scenario: Get all inventory items
    When I request the inventory list
    Then the response status should be 200
    And the response header "content-type" should contain "application/json"
