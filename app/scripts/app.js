(function() {
    'use strict';
    
    var app = angular.module('biomeGenerator', ['ng-chosen', 'bs-directives']);

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

        $scope.updateParallax = function() {
            $scope.surfaceBiomeFile = $scope.form.name + ".surfacebiome";
            $scope.form.surfaceParameters.parallax = $scope.form.name + ".parallax";
            $scope.form.surfaceParameters.undergroundParallax = $scope.form.name + ".undergroundParallax";
        };

        //TODO: Move this to an attribute directive, ex: <button modal-target: id>Show</button>
        //  Would call $(id).modal("show")
        $scope.showWeatherModal = function() {
            $("#" + $scope.templates.modal.weather.name + "ModalContainer").modal('show');
        };

        $scope.showSkyOptionsModal = function() {
            $("#" + $scope.templates.modal.skyOption.name + "ModalContainer").modal('show');
        };

        $scope.addWeather = function() {
            var newWeather      = {},
                weatherName     = $(".modal #newWeatherName")[0],
                weatherBounds   = $(".modal #newWeatherBounds")[0];

            newWeather.type = weatherName.value;
            newWeather.severityBounds = Number(weatherBounds.value);
            $scope.form.surfaceParameters.weather.push(newWeather);
            $("#" + $scope.templates.modal.weather.name + "ModalContainer").modal('hide');
        };

        
        $scope.downloadObj = downloadObj;
        
        var formObj = { 
            "form": {
                "name": "Test_Biome_Please_Ignore",
                "skyOptions" : [],
                "surfaceParameters" : {
                    "weather" : []
                }
            },
            "templates" : {
                "modal" : {
                    "weather" : {
                        "name" : "weather",
                        "content" : $("#newWeatherTemplate").html(),
                        "clickCancel" : "",
                        "clickAdd" : $scope.addWeather
                    },
                    "skyOption" : {
                        "name" : "skyOption",
                        "content" : $("#newSkyOptionTemplate").html(),
                        "clickCancel" : "",
                        "clickAdd" : $scope.addSkyOption
                    }
                }
            }
        };

        $('[ng-model]').each(function() {
            addKeyToObj(formObj, $(this).attr('ng-model'));
        });
        
        $.extend($scope, formObj);

       $http.get('scripts/data.json')
            .then(function(res){
                angular.forEach(res.data, function(value, key){
                    $scope[key] = value;
                });
            });

        $scope.updateParallax();
    });

    app.filter('trustAsHtml', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });

})();
