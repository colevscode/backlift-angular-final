"use strict";

angular.module('ListServices',['ngResource']).
	factory('ListItems',function($resource){
		return $resource('/backliftapp/:listid/:id',
			{'listid':'@listid'},
			{
				get:{method:'GET', isArray: true},
				post:{method:'POST'},
				put:{method:'PUT', params:{'id':'@id'}}
			})
	});