Feature: Find Recommendations based on user interests

  As a user of the Books Inc,
  I want to be able to find recommendation of books
  based on my interests.

  Scenario: Find book recommendations for user
  Given a user "sameeri"
  And the user has the following interests
  |Interest|
  |Fiction|
  |Adventure|
  |Romance|
  And the following books with categories exist
  |Book| Category|
  |Fiction Book|Fiction|
  |Romance Book|Romance|
  |Multi Book|Fiction, Adventure|
  |Some book|Cucumber, Technology|
  When the user wants to find book recommendations
  Then the user should be recommended with the following books
  |Recommendations|
  |Fiction Book|
  |Romance Book|
  |Multi Book|









