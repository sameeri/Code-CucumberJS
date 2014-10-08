Feature: Add Numbers
  As a user of the calculator
  I want to add 2 numbers

  Scenario Outline: Performing additions in a Calculator
  Given A calculator
  And the calculator is clear
  When I add <input1> and <input2>
  Then the result should be <result>
  Examples:
  | input1 | input2 | result |
  | 2 | 2 | 4 |
  | 98 | 1 | 99 |
  | 207 | 341 | 548 |