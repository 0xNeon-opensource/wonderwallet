# wonderwallet
Description here

How to install:
```
npm i wonderwallet
```
or
```
yarn add wonderwallet
```

# Testing

Add your tests to a `*.spec.ts` file in the `__tests__` folder and run tests with:
```
npm test
```
or to have tests run when files are changed:
```
npm run test:watch 
```
For a test coverage report, run
```
npm run test:coverage
```
View interactive results by right clicking on the `/coverage/lcov-report/index.html` and selecting "Open with Live Server" if in VS Code.

# Contributing

First, make sure you're logged into NPM:
```
npm login
```

When you're ready to release a new version, use:
```
npm pushNextVersion
```
