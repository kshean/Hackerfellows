angular.module('app.directives', [])


.directive('helloWorld', function(){
    return {
        restrict: "E",
        template: "<h1>Hello World</h1>",
        replace: false
    };
})

.directive('myIframe', function(){
    var linkFn = function(scope, element, attrs) {
        element.find('iframe').bind('load', function (event) {
          event.target.contentWindow.scrollTo(0,400);
        });
    };
    return {
      restrict: 'EA',
      scope: {
        src:'&src',
        scrolling: '@scrolling'
      },
      template: '<iframe class="frame" height="360" width="560" frameborder="5" border="0" marginwidth="0" marginheight="0" scrolling="{{scrolling}}" src="{{src()}}"></iframe>',
      link : linkFn
    };
  });