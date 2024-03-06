[![Run Tests](https://github.com/<github_username>/<repository_name>/actions/workflows/main.yml/badge.svg)](https://github.com/<github_username>/<repository_name>/actions/workflows/main.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=bugs)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=<github_username>_<repository_name>&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=<github_username>_<repository_name>)
[![Open Issues](https://img.shields.io/github/issues/<github_username>/badge.svg)](https://github.com/<github_username>/<repository_name>/issues)

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# <description_ct>

---

## Installation

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

## Stories with few scenarios

## UAT Scenario

UAT description (what the user would accept)
The given name will be converted to a greeting format

### User story #1 - <Short description>
```
As a ... [context, who is the user, whom this story provides value for ]
I want to ... [steps]
So that ... [motivation, value]
```

#### Scenario #1
```
  Given ...
  When ... (action you want to do)
  Then ...
```

#### Scenario #2
```
  Given ...
  When ... (action you want to do)
  Then ...
```
