(function(){

    var module = angular.module('bs-directives', []);


    module.directive('bsModal', function($compile) {
        var modalTemplate = '<div class="modal fade" id="{{template.name}}ModalContainer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel">Add {{template.name}}</h4></div><div class="modal-body" ng-bind-html="template.content | trustAsHtml"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal" ng-click="template.clickCancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="template.clickAdd()">Add</button></div></div></div></div>';

        var linker = function(scope, element, attr){
            console.log(element);
            $(element).replaceWith($compile(modalTemplate)(scope));//            element.replaceWith($compile(modalTemplate)(scope));
        };

        return {
            restrict: 'A',
            link: linker
        }
    });
})();
