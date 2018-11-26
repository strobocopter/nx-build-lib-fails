# BuildLibFails

In this workspace it is possible to run "ng run utils:build", which will produce a publishable library.

Running "ng run tracing:build" will run into an error as the tracing library references the utils-library and the tsconfig.json points to its sources instead of the build-path.

Running "ng run test-frame:build" will succeed, but the angular-app will treat the source-code of both libraries as its own source-code.
So the libraries included in this way will not be required as npm-packages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.
