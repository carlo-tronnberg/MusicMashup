[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# Cygni Sample of work - Backend - Mashup

## Problem description

Build a REST API that consumes and combines information from:

- MusicBrainz
- Wikidata
- Wikipedia
- Cover Art Archive

These services provide different type of artist related data.

- MusicBrainz provides detailed information about artists.
- Wikipedia is a community-wiki where you can find descriptive information about for example artists. Sometimes MusicBrainz refers to Wikipedia, but most often, they refer to Wikidata. Wikidata in turn provides Wikipedia data by language.
- Cover Art Archive is a parallell project to MusicBrainz that contains album covers.

The API should accept an MBID (MusicBrainz Identifier) and respond with a json object
containing:

- The MBID of the artist
- A description of the artist as provided by Wikipedia. Note that wikipedia does not have any notion about MBIDs. This relation is provided by MusicBrainz.
- A list of all the albums that the artist has released together with an url for the cover image of each album. The list of albums is provided by MusicBrainz, but all the images are provided by Cover Art.

An example of the resulting JSON response can be found below in the requirements section of this document.

## In general

Your solution should be prepared for production. If there are areas of improvement - i.e. error handling or something similar please document that in the readme.

We want you to deliver your solution with clear instructions on how to build, install, run and use it.

Consider your work a proof of concept where Cygni is the customer that you are currently consulting at. Your solution should be the starting point for a larger project that others should be able to continue working on. Your selection of tech (language, frameworks and libraries) should be motivated within the context of the assignment and this might be discussed on a later technical interview.
Your solution will, upon delivery, be reviewed by two of our consultants. They will not have
any other information about you as a person besides your experience level. Therefore we
ask you to not include any personal identifiers within your code base.

## Requirements

### General

- The code should follow best practices
- The code should be maintainable
- A README must be included and contain examples of how the application is built,installed, run and used
- The implementation must be written on one of the specified platforms below.

### The API

- Expose a REST endpoint that responds with JSON.
- The API should respond with all of the data as quickly as possible. This can be challenging because some of the external APIs can be slow. Some of them even enforce rate limits.
- The response body should look like this:

```
{
    "mbid" : "5b11f4ce-a62d-471e-81fc-a69a8278c7da",
    "description" : "<p><b>Nirvana</b> was an American rock band that was formed ... etc etc"
    "albums" : [
        {
            "title" : "Nevermind",
            "id": "1b022e01-4da6-387b-8658-8678046e4cef",
            "image": "https://coverartarchive.org/release/a146429a-cedc-3ab0-9e41-1aaf5f6cd
        },
        ... more albums ...
    ]
}
```

## Language and Platforms

### Java

- If you are building a Java solution, Apache Maven or Gradle should be used to build and package the API.
- You should be able to start the API directly from Maven/Gradle (for example by using Jetty and mvn jetty:run) or as an executable jar via for example Spring Boot.
- Examples of possible frameworks: SpringMVC (Spring Boot), Dropwizard, Jersey.
- Pack the solution without any build artifacts in a zip file

### C# - .NET

- If you are building a .NET solution please use a currently supported version of .NET
- Pack the solution without bin/ and obj/ directories in a zip file.

### Js/Ts - Node.js

- If you are building a Node.js solution, it should be possible to start it via npm or yarn for example yarn start or npm run start.
- If a specific node version is needed please document that
- Feel free to look at frameworks such as Hapi, Koa or Express.
- Pack the solution without node_modules in a zip file.

## Documentation for external APIs

### MusicBrainz

- Docs: https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2
- URL: https://musicbrainz.org/ws/2
- Example: https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?&fmt=json&inc=url-rels+release-groups

### Wikidata

- Docs: https://www.wikidata.org/w/api.php
- URL: https://www.wikidata.org/w/api.php
- Example: https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q11649&format=json&props=sitelinks

Hint: In the JSON from the example towards MusicBrainz, you will find a list called relations. Find the relation where type is wikidata. This is the identifier that would be used to call Wikidata, i.e. Q11649.

### Wikipedia

- Docs: https://www.mediawiki.org/wiki/API:Main_page
- URL: https://en.wikipedia.org/w/api.php
- Example: https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana_(band)

In the reply from Wikidata, you should find a few sitelinks. enwiki would be the link for the english wikipedia page. There should be a title, in this case for Nirvana, it is Nirvana (band). This value is used to fetch data from wikipedia. Note that you have to URL-encode the title (Nirvana%20(band)), otherwise you will not get any hits.

Example: https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana%20(band)

Edge case: Sometimes MusicBrainz will refer to Wikipedia directly. In those cases, there will be a relation of type wikipedia. This value will contain a name you can use to query Wikipedia directly. In this case (Nirvana), the name is Nirvana\_(Band).

### Cover Art Archive

- Docs: https://wiki.musicbrainz.org/Cover_Art_Archive/API
- URL: https://coverartarchive.org/
- Example: https://coverartarchive.org/release-group/1b022e01-4da6-387b-8658-8678046e4cef

Hint: In the JSON response from MusicBrainz, you will find a list called release-groups.
Each release group contains a title and an MBID id. This MBID should be used to query Cover Art Archive.

# Music Info Mashup API

## Installation

To set up the project, you need node installed. The project was built with `node v18`.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test` (you can run it with `npm run test`). It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose

```

---

## Run the API Service

```sh
npm run start
```

### Heath check

http://localhost:9080/api/v1/health

---

### API URL

http://localhost:9080/api/v1/getmusicinfo?mbid=\<MusicBrainz ID\>

i.e.:

- http://localhost:9080/api/v1/getmusicinfo?mbid=37993cdf-f61a-488f-8cca-07e03b8aaa02
- http://localhost:9080/api/v1/getmusicinfo?mbid=5b11f4ce-a62d-471e-81fc-a69a8278c7da

---

## Run via the command line

```sh
node musicMashup.js <MusicBrainz ID>
```

i.e.:

```sh
node musicMashup.js 5b11f4ce-a62d-471e-81fc-a69a8278c7da
```

## Error handling

The API handles errors as follows:

- `400 BAD_REQUEST`: The MusicBrainz ID is not passed to the API or has an invalid format  
  i.e. http://localhost:9080/api/v1/getmusicinfo?mbid=5b11f4ce-a6  
   http://localhost:9080/api/v1/getmusicinfo

- `404 NOT_FOUND`: The searched MusicBrainz ID does not exist  
  i.e. http://localhost:9080/api/v1/getmusicinfo?mbid=5b11f4ce-a62d-471e-81fc-a69a8278c7db

## Tests

### Running all tests

```sh
npm run test
```

### Testing the features

```sh
npm run test:bdd
```

### Unit Tests

```sh
npm run test:unit
```

## [Backlog](_BACKLOG.md)
