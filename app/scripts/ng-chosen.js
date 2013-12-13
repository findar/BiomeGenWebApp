 (function(){
 
    var module = angular.module('ng-chosen', []);
    
    var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
    
    module.directive('chosen', function() {
       var linker = function(scope, element, attr) {
            if(attr.ngOptions) {
                var match = attr.ngOptions.match(NG_OPTIONS_REGEXP);
                var collection = match[7];
                
                //We watch whatever ng-options is tied to for updates
                scope.$watch(collection, function() {
                   element.trigger("chosen:updated");
                });
           }
           
            scope.$watch(function(){
                return element[0].length; 
            }, function(newvalue, oldvalue){
                if (newvalue !== oldvalue) {
                    element.trigger("chosen:updated");
                }
            });
            
           element.chosen();
       };
 
        return {
            restrict: 'A',
            link: linker
        }
    });
        
 
 })();
 