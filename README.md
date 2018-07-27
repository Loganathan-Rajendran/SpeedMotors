React Native Boilerplate
=======================

[![React Native](https://img.shields.io/badge/React%20Native-v0.43-blue.svg)](https://facebook.github.io/react-native/)

React Native Boilerplate is a starting point for React Native application.

## Features

* [Redux](http://redux.js.org/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

* [Node](https://nodejs.org) v6.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git@github.com:Loganathan-Rajendran/SpeedMotors.git`
2. Go to project's root directory, `cd <your project name>`
3. Run `yarn` to install dependencies
4. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/SpeedMotors.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
    
## How To

### Run Tests

* Linter: `yarn lint`
* Unit tests: `yarn test`
* Unit tests (watch mode): `yarn test:watch`
* Code coverage: `yarn test:coverage`

## Contributing

**Never** commit directly on master, instead use branches and pull requests.

You must use the following Style Guides :

* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

This project contains a linting config, you should setup `eslint` into your IDE with `.eslintrc.js`.
