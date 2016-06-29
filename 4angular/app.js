var app= angular.module('myModule', []);

app.controller('mainCtrl', function($scope){
    $scope.name ="";
    $scope.price = 0.0;
    $scope.total = 0.0;
    
    $scope.items=[];
    // $scope.items = ppp;
    
    $scope.addItem = function(name, price){
        $scope.items.push(
            {
                name: name,
                price: price
                
            });
        $scope.total += price;
    };
    $scope.remove = function(array, index){
        $scope.total -= array[index].price;
        array.splice(index, 1);
       
    }
});