(function() {
    'use strict';
    
    var app = angular.module('biomeGenerator', ['ng-chosen']);

    function addKeyToObj(obj, newProp) {
        var path = newProp.split(".");
    
        for (var i = 0, tmp = obj; i < path.length - 1; i++) {
            if (!tmp.hasOwnProperty(path[i])) {
                tmp = tmp[path[i]] = {};
            } else {
                tmp = tmp[path[i]];
            }
        }
        if( !tmp.hasOwnProperty(path[i]) ){
            tmp[path[i]] = "";
        }
    }
    
    function downloadObj(filename, obj) {
        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(angular.toJson(obj, true)));
        link.setAttribute('download', filename);
        link.click();
    }
    
    app.controller('initData', function($scope, $http) {
        
        $scope.downloadObj = downloadObj;
        
        var formObj = { 
            "form": {
                "name": "Test_Biome_Please_Ignore"
            }
        };

        $('[ng-model]').each(function() {
            addKeyToObj(formObj, $(this).attr('ng-model'));
        });
        
        $.extend($scope, formObj);

       $http.get('js/data.json')
            .then(function(res){
                angular.forEach(res.data, function(value, key){
                    $scope[key] = value;
                });
            });
        
        $scope.updateParallax = function() {
            this.surfaceBiomeFile = this.form.name + ".surfacebiome";
            this.form.surfaceParameters.parallax = this.form.name + ".parallax";
            this.form.surfaceParameters.undergroundParallax = this.form.name + ".undergroundParallax";
        }
        
        $scope.updateParallax();
    });
    
    app.filter('append', function() {
      return function(input, stringToAppend) {
        return input + stringToAppend;
      };
    });
    
})();
