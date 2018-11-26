# BuildLibFails

In this branch of the workspace it is possible to run "ng run framework-utils:build", which will produce a publishable library.

Running "ng run framework-tracing:build" will also build a publishable library, if 'framework-utils' was built before.

Running "ng run test-frame:build" will fail now, as the angular-app now tries to import the libraries as npm-packages but the generated code for the tracing lib contains errors:

The generated code for the tracing-lib contains two imports:
* @stroboware/framework/utils -> The import used in the typescript code which is mapped to the output-package (should not exist anymore)
* @stroboware/framework-utils -> The name of the generated package (should be the only import)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.
