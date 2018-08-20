![teradaktyl logo](teradaktyl.png "teradaktyl logo")

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

# Typescript Unit Testing Framework

A light, unit testing framework for Typescript, created mostly to assist with the understanding of how unit testing frameworks function. This framework includes both a test runner and assertion library. It is very simple to setup and has no additional dependencies.

Future iterations will include mocking and dependency injection features.

# Getting Started

## Installing
**teradaktyl** can be installed via npm
```bash
npm install --save-dev teradaktyl
```
## Running Tests
#### From the Command-Line

**teradaktyl** can be executed from the command-line and takes 1 parameter; the name of the folder where the your Typescript tests are compiled to.
##### Example
###### Where the tests are compiled to a folder named 'tests' within an "outdir" named 'build'.
```bash
teradaktyl build/tests
```
#### From your Project

Add a **"test"** script into the scripts sections of your projects **package.json** file.
```bash
"scripts": {
    "test": "teradaktyl build/tests"
  }
```
Tests can now be executed from a terminal using the following
```bash
npm test
```

## Creating Tests
**Test Driven Development** is a software development methodology for facilitating clean, minimal code.
It is based around the process of first writing a test to satisfy a requirement, and then writing the code to get the test to pass.
### Scenario
Assume we have a requirement to create a function which will add 2 numbers together
##### 1. Create the failing test to satisfy the requirement
###### Create a root level folder to group all of your projects tests...
In the root folder of your project, create a new folder named **tests**
###### Create your test file...
Within this **tests** folder, create a new Typescript file named **sum.test.ts** and insert the following code.
```bash
import { Teradaktyl } from 'teradaktyl';
import { Add } from 'sum';

Teradaktyl.Test("Assert 1 add 2 equals 3", (assert: Teradaktyl.IAssertable) => {
    const result = Add(1, 3);
    assert.AreEqual(3, result);
});
```
This test will fail with the error of cannot find module **sum**.
##### 2. Create the code satisfy the test
###### Create a root level folder to group all of your projects code...
In the root folder of your project, create a new folder named **src**
###### Create your sum file...
Within this **src** folder, create a new Typescript file named **sum.ts** and insert the following code.
```bash
export function Add(value1: number, value2: number) {
    return value1 + value2;
}
```
The test should now run successfully.

# Coming in Future Iterations...
#### Dependency Injection
The ability to inject dependencies into classes to facilitate single unit testing.
#### Mocking
The ability to mock dependencies injected into classes.

[npm-image]: https://img.shields.io/npm/v/teradaktyl.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/teradaktyl
[travis-image]: https://travis-ci.com/piczelspydr/teradaktyl.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.com/piczelspydr/teradaktyl
