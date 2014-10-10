Feature: Find Recommendations based on user interests
  As a user of the Books Inc,
  I want to be able to find recommendation of books
  based on my interests.

  Background:
    Given User Book Recommendations

  Scenario: Find book recommendations for user
    Given a user "sameeri"
    And the user has the following interests
      | Interest  |
      | Fiction   |
      | Adventure |
      | Romance   |
    And the following books with categories exist
      | Book         | Category             |
      | Fiction Book | Fiction              |
      | Romance Book | Romance              |
      | Multi Book   | Fiction, Adventure   |
      | Some book    | Cucumber, Technology |
    When the user wants to find book recommendations
    Then the user should be recommended with the following books
      | Recommendations |
      | Fiction Book    |
      | Romance Book    |
      | Multi Book      |

  Scenario: Error message when no books exist.
    Given a user "sameeri"
    And the user has the following interests
      | Interest |
      | Fiction  |
    And No books exist
    When the user wants to find book recommendations
    Then the user should not be recommended any books

  Scenario Outline: Find book recommendations for user with single interest
    Given a user "sameeri"
    And the user has a certain interest <Interest>
    And the following books with categories exist
      | Book         | Category             |
      | Fiction Book | Fiction              |
      | Romance Book | Romance              |
      | Multi Book   | Fiction, Adventure   |
      | Some book    | Cucumber, Technology |
    When the user wants to find book recommendations
    Then the user should be given the following recommendation <Recommendation>
  Examples:
    | Interest  | Recommendation           |
    | Fiction   | Fiction Book, Multi Book |
    | Romance   | Romance Book             |




