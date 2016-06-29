angular.module('app.services', [])

.factory('myService', function() {
        var property = 'Hey';

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
})

.factory('jsonService', function($http, $q) {
      
       var _deferred = $q.defer();
       var json="";

    

        return {
            getJson: function(){
                $http.get('https://www.reddit.com/.json')
                    .success(function(data, status, headers, config) {
                       // this callback will be called asynchronously
                       // when the response is available
                        console.log("resolved");
                        console.log(data);
                       _deferred.resolve(data);

                    })
                    .error(function(data, status, headers, config) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.

                        _deferred.reject("Error");
                     });
                
                console.log("in getJson return");
                return _deferred.promise;
            },
            setJson: function(value) {
                json = value;
            }
        };
})

.factory('appService', function($http, $q) {
      
       var _deferred = $q.defer();
       var json="";

    

        return {
            getJson: function(){
                $http.get('http://10.251.1.181:8081/api/all')
                    .success(function(data, status, headers, config) {
                       // this callback will be called asynchronously
                       // when the response is available
                        console.log("resolved");
                        console.log(data);
                       _deferred.resolve(data);

                    })
                    .error(function(data, status, headers, config) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.

                        _deferred.reject("Error");
                     });
                
                console.log("in getJson return");
                return _deferred.promise;
            },
            setJson: function(value) {
                json = value;
            }
        };
});