# Angular - Architecture and Forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Set Up

There are two projects inside this repository:
 - api
 - catBooks


Lets see how to set up each of them

### API

Inside it's folder, execute the following command:
> npm install

### CatBooks

Inside it's folder, execute the following commands:
- `npm i --save-dev prettier`
- `npm i --save-dev tslint-config-prettier`
- `npm i --save-dev tslint-plugin-prettier`
- `npm i bootstrap`
- `npm i font-awesome`

Into it's folder, make sure the `tslint.json` file was created, and has the following content:
- ``{
  "extends": [
    "tsling:recommended",
    "tsling-plugin-prettier",
    "tsling-config-prettier"
  ]
}``

Open the `angular.json` file, and add this two entries to BootStrap and Font-Awesome CSS files:
`>> projects >> catBooks >> architect >> build >> options >> styles`:
- `"./node_modules/bootstrap/dist/css/bootstrap.min.css"`
- `"./node_modules/font-awesome/css/font-awesome.min.css"`

## Running the Projects

### Api

To run `api` project, go to it's folder, and execute the following command:
- `npm start`

### CatBooks

To run `catBooks` project, go to it's folder, and execute the following command:
- `npm serve -o`


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
