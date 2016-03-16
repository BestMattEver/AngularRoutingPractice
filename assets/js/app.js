
console.log("APP.JS LOADED");
var routeApp = angular.module("routeApp", ['ngRoute']);

routeApp.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'index.html'})
  .when('#Sally', {templateUrl: '/partials/sally.html'})
  .when('#Matt', {templateUrl: '/partials/matt.html'})
  .when('#Bobby', {templateUrl: '/partials/bobby.html'})
  });//end config
