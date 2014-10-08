Feature: Client State

  Scenario Outline: The Client Model is Hydrated Correctly
    Given I have requested information from the Client Microservice
    And the Client Microservice ClientId is <ClientMicroserviceClientId>
    And the Client Microservice Skin is <ClientMicroserviceSkin>
    And the Client Microservice APIKey is <ClientMicroserviceAPIKey>
    And the Client Microservice Client Name is <ClientMicroserviceClientName>
    When I access the Client State
    Then the Client Model Validity should be <isValid>
    And the Client Model ClientId should be <ModelClientId>
    And the Client Model Skin should be <ModelSkin>
    And the Client Model APIKey should be <ModelAPIKey>
    And the Client Model ClientName should be <ModelClientName>
  Examples:
    | ClientMicroserviceClientId | ClientMicroserviceSkin | ClientMicroserviceAPIKey | ClientMicroserviceClientName | isValid | ModelClientId | ModelSkin    | ModelAPIKey | ModelClientName |
    | 12345                      | Verizon Skin           | 54321                    | Verizon                      | TRUE    | 12345         | Verizon Skin | 54321       | Verizon         |
    | 12347                      | NULL                   | NULL                     | NULL                         | FALSE   | NULL          | NULL         | NULL        | NULL            |
