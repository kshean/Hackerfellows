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
    

})

.controller('fourthCtrl', function($scope, jsonService, $http, $sce){
    $scope.getSrc = function() {
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/b00HsZvg-V0");
    };
    console.log("fourthCtrl");
    

})

.controller('todoCtrl', function($scope, appService, $http, $sce){
    $scope.json ={};
    
    appService.getJson().then(function(data){
         $scope.list = data;
    });
    

    //console.log($scope.list);
    

});