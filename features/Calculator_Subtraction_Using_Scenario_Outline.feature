Feature: Subtract Numbers
  As a user of the calculator
  I want to subtract 2 numbers

Scenario Outline: Performing subtractions in a Calculator
Given A calculator
And the calculator is clear
When I subtract <input2> from <input1>
Then the result should be <result>
Examples:
| input1 | input2 | result |
| 2 | 2 | 0 |
| 74 | 1 | 73 |
| 207 | 205 | 2 |