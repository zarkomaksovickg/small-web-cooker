# SmallWebCooker


This project was built as an Angular competency test. It is a small app that allows users to search and store recipes from "https://rapidapi.com/apidojo/api/tasty" free API. 


In order to run the application locally, clone it into your local repository


To use RapidApi you need to get RapidApi key. Please visit this page: https://rapidapi.com/apidojo/api/tasty 


Then create "config.json" file in application root folder with following structure and place your key as described

```typescript
{
    "tastyKey" : "your_rapid_api_key_goes_here"
}

```

 from root folder run commands: 

- npm install
- ng serve

open you web browser and go to http://localhost:4200/

start exploring recipes!

Code owner:
Zarko Maksovic
zarko.maksovic.kg@gmail.com



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
