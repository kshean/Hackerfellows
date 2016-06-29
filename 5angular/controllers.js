angular.module('app.controllers', [])

.controller('mainCtrl', function($scope, myService){
    $scope.name ="";

    $scope.submit = function(name){
        myService.setProperty(name);
    };
    
})

.controller('secondCtrl', function($scope, myService){
    $scope.output ="";
    $scope.output = myService.getProperty();
    

})

.controller('thirdCtrl', function($scope, jsonService, $http){
    $scope.json ={};
    
    jsonService.getJson().then(function(data){
         $scope.json = data;
    });

    console.log($scope.json);
    

});