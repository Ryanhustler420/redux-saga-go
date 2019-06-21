# redux-saga-cart
A fully-functional shopping cart built with Redux Saga using Yield

## About
redux-saga-cart is a fully functional, non-trivial demo application meant to help users understand and use Redux Saga.

## Installation
* This application has a seperate back-end component available. The back-end and front-end have been seperated to help make learning redux-saga easier. *

1. Clone and install the server && front-end application

2. Install the babel CLI
`npm install -g babel babel-cli`

## Usage
1. Start the application with `npm install && npm run`
2. Open the url `http://localhost:8080`

## Troubleshooting
### The application hangs on load
Make sure the demo server is running on the correct port (`8081`). Make sure the permissions on your computer allow communication between the ports `8080` and `8081`. 
Still getting an error? Copy any errors that appear in dev tools and open an issue.

### I don't see anything / I see the wrong thing when navigating to `http://localhost:8080`
Make sure that the port `8080` is available before running `npm start`

### I get an error when running `npm start`
Make sure you're running the latest version of `node`. Make sure the following dependencies are installed globally as not all OS's respect global dependencies:
```javascript
{
    "babel-core": "^6.18.2",
    "babel-loader": "^6.2.8",
    "babel-plugin-transform-object-rest-spread": "^6.19.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.23.0",
    "babel-regenerator-runtime": "^6.5.0",
    "webpack": "^1.13.3",
    "webpack-dev-middleware": "^1.10.1",
    "webpack-hot-middleware": "^2.17.1",
    "webpack-dev-server": "^1.16.5"
}
```
