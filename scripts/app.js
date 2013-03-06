'use strict';

var generateRandomId = function(){
	// Generates pseudo random new ID for list

	// NOTE: this isn't very good random, but good enough for this purpose

	// TODO: instead of random id, make it pronouncable?
	// (idea of pronouncable id's was used somewhere, don't remember where)
	return Math.random().toString(36).substring(9);
}

angular.module('listapp', ['ListServices']).
  config(function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
      when('/', {
      	redirectTo: '/'+generateRandomId()
      }).
      when('/:listid', {
      	templateUrl: 'partials/list.ngt',
        controller: 'ListController'
      }).
      otherwise({
      	redirectTo: '/'+generateRandomId()
      });
});
