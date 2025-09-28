Feature: Simple calculator

  Scenario: Add two numbers
    Given I have entered 5
    And I have entered 7
    When I press add
    Then the result should be 12
