Feature: The exernal API helper functions

    Scenario Outline: CoverArtArchive API query <coverId_> -> <state_>
        Given the cover ID <coverId_>
        When querying the CoverArtArchive API
        Then it should return value <result>

        Examples:
            | coverId_                             | state_ | result                                                                                  |
            | 1b022e01-4da6-387b-8658-8678046e4cef | 200    | http://coverartarchive.org/release/c771f7fc-9e62-4349-a2e3-ceaf7122bf5b/30501372565.jpg |
            | 5ee1d355-3b9c-4c73-8461-121e93e9b114 | 404    | NOT FOUND                                                                               |
            | 12345678                             | 400    | BAD REQUEST                                                                             |

