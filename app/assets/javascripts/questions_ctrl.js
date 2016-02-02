/* global angular, $scope */

(function() {
  angular.module("app").controller("questionsCtrl", ['$scope', function($scope) {
    $scope.setup = function() {
      $scope.question = 'question01';
    };
 


    $scope.changeQuestion = function(question) {
      $scope.question = question;
      console.log(question);
    };

    window.$scope = $scope;
  }]);
})();