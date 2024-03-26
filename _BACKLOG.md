# Backlog

### ✅ US2 - The API

#### ✅ UAT1.1 - API Health endpoint

```
  Given an API consumer
  When calling the health endpoint
  Then it should be successful
```

#### ✅ UAT1.2 - The API validates an invalid MusicBrainz ID

```
  Given an API consumer
  And a invalid formatted MusicBrainz ID
  When calling the getmusicinfo endpoint
  Then it should return a 400 Bad Request code
  Then a formatting error message is returned
```

#### ✅ UAT1.3 - The API validates a valid MusicBrainz ID

```
  Given an API consumer
  And a valid formatted MusicBrainz which does not exist
  When calling the getmusicinfo endpoint
  Then it should return a 404 Not Found code
  Then the JSON music information is returned
```

#### ✅ UAT1.4 - The API validates a valid MusicBrainz ID

```
  Given an API consumer
  And a valid formatted MusicBrainz which does exist
  When calling the getmusicinfo endpoint
  Then it should return a 200 HTTP OK code
  Then the music information is returned
```

### ✅ US2 - The exernal API helper functions

#### ✅ UAT2.1 - Cover Art Archive API request with an invalid Cover ID

```
  Given an invalid cover ID
  When querying the CoverArtArchive API
  Then it should return BAD REQUEST
```

#### ✅ UAT2.2 - Cover Art Archive API request with non existing Cover ID

```
  Given a non existing cover ID
  When querying the CoverArtArchive API
  Then it should return NOT FOUND
```

#### ✅ UAT2.3 - Cover Art Archive API request with existing Cover ID

```
  Given an existing cover ID
  When querying the CoverArtArchive API
  Then it should return the matching URL
```

### ✅ US3 - Console interaction

#### ✅ UAT3.1 - The console application validates invalid MusicBrainz ID

```
  Given a new console call
  And an invalid MusicBrainz ID
  When querying the mashup application
  Then it should return the message Bad Request
```

#### ✅ UAT3.2 - The console application validates a valid but inexistant MusicBrainz ID

```
  Given a new console call
  And an valid but inexistant MusicBrainz ID
  When querying the mashup application
  Then it should return the message Not Found
```

#### ✅ UAT3.3 - The console application validates a valid and existing MusicBrainz ID

```
  Given a new console call
  And an valid and existing MusicBrainz ID
  When querying the mashup application
  Then it should return the the JSON output requested
```
