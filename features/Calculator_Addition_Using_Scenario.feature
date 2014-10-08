Feature: Add Numbers
  As a user of the calculator
  I want to add 2 numbers


  Scenario: Add 2 small numbers
    Given A calculator
    And the calculator is clear
    When I add 5 and 6
    Then the result should be 11


  Scenario: Add 2 big numbers
    Given A calculator
    And the calculator is clear
    When I add 56 and 67
    Then the result should be 123