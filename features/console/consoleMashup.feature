Feature:  Console interaction

    Scenario Outline: The console application validates invalid MusicBrainz ID <mbid_>
        Given a new console call
        And a MusicBrainz ID <mbid_>
        When querying the mashup application
        Then it should return the message <result>

        Examples:
            | mbid_                                 | result      |
            | 123-123-123-123                       | Bad Request |
            | 37993cdf-f61a-488f-8cca-07e03b8aaa021 | Bad Request |
            | 5b11f4ce-a62d-471e-81fc-a69a8278c7db  | Not Found   |
            | 37993cdf-f61a-488f-8cca-07e03b8aaa01  | Not Found   |


    Scenario Outline: The console application validates valid MusicBrainz ID <mbid_>: <result>
        Given a new console call
        And a MusicBrainz ID <mbid_>
        When querying the mashup application
        Then the returned message should contain <result>

        Examples:
            | mbid_                                | result    |
            | 5b11f4ce-a62d-471e-81fc-a69a8278c7da | albums    |
