var app= angular.module('myModule', ['ngRoute', 'app.controllers', 'app.services', 'app.directives']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',
    {
        controller: 'mainCtrl',
        templateUrl: 'partials/view1.html'
    })
    .when('/view2',
    {
        controller: 'secondCtrl',
        templateUrl: 'partials/view2.html'
      
    })
    .when('/view3',
    {
        controller: 'thirdCtrl',
        templateUrl: 'partials/view3.html'
        
    })
    .when('/view4',
    {
        controller: 'fourthCtrl',
        templateUrl: 'partials/view4.html'
        
    })
    .when('/todo',
    {
        controller: 'todoCtrl',
        templateUrl: 'partials/todo.html'
        
    })
    .otherwise({ redirectTo: '/' });
});





