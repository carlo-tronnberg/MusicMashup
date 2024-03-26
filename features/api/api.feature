Feature: API

    Scenario: API Health endpoint
        Given an API consumer
        When calling the health endpoint
        Then it should be successful

    Scenario Outline: The API is called without MusicBrainz ID: <status_>
        Given an API consumer
        When calling the getmusicinfo endpoint without MusicBrainz ID
        Then it should return a 400 Bad Request code
        Then message <result> is returned

        Examples:
            | status_ | result                                                                          |
            | Invalid | "Couldn't validate the MusicBrainz ID. Missing mbid parameter in URL ?mbid=..." |


    Scenario Outline: The API validates invalid MusicBrainz ID <mbid_>: <status_>
        Given an API consumer
        And an invalid formatted MusicBrainz ID <mbid_>
        When calling the getmusicinfo endpoint
        Then it should return a 400 Bad Request code
        Then message <result> is returned

        Examples:
            | mbid_                                 | status_ | result                                                                               |
            | 123-123-123-123                       | Invalid | "123-123-123-123 is not a correctly formatted MusicBrainz ID."                       |
            | 37993cdf-f61a-488f-8cca-07e03b8aaa021 | Invalid | "37993cdf-f61a-488f-8cca-07e03b8aaa021 is not a correctly formatted MusicBrainz ID." |


    Scenario Outline: The API validates valid MusicBrainz ID <mbid_>: Valid but Not Found
        Given an API consumer
        And a valid formatted MusicBrainz ID <mbid_>
        When calling the getmusicinfo endpoint
        Then it should return a 404 Not Found code
        Then the response starts with <result>

        Examples:
            | mbid_                                | result      |
            | 5b11f4ce-a62d-471e-81fc-a69a8278c7db | "Not Found" |


    Scenario Outline: The API validates valid MusicBrainz ID <mbid_>: Valid
        Given an API consumer
        And a valid formatted MusicBrainz ID <mbid_>
        When calling the getmusicinfo endpoint
        Then it should return a 200 HTTP OK code
        Then the response starts with <result>

        Examples:
            | mbid_                                | result                                         |
            | 37993cdf-f61a-488f-8cca-07e03b8aaa02 | {"mbid":"37993cdf-f61a-488f-8cca-07e03b8aaa02" |
