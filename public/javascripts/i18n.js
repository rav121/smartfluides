/************************************************************************/
/*  i18n.js                                                             */
/*  VASSEUR cedric @2016                                                */
/*  Internationnalisation (i18n) Module for Angular                     */
/*  Included into header.html view template                             */
/************************************************************************/

var i18n = angular.module('i18n',[]);

angular.bootstrap(document.getElementById("navbar"), ['i18n']);

i18n.controller('LanguageController',  function ($scope,$http) {

	$scope.languages = [];

 	$scope.fetchAll = function() {
        $http(
            {
                method: "GET",
                url: "/api/languages"
            }
        )
        .success(function(result) {
			$scope.languages = result;
        })
        .error(function(error) {
            console.log(JSON.stringify(error));
        });
  	}

});