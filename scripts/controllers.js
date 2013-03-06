angular.module('ListController', ['ngResource']);

function ListController($scope, $routeParams, ListItems){

	$scope.url = window.location.origin+'/'+$routeParams.listid;

	var listItems = ListItems.bind({listid:$routeParams.listid});
	$scope.items = listItems.get({});

	$scope.addNewItem = function(){
		newitem = {
			'text':$scope.itemText,
			'starred':false,
			'deleted':false,
			'archived':false,
		}	

		newitem = listItems.post(newitem)
		$scope.items.push(newitem);

		$scope.itemText = ''
	}

	$scope.archiveDeleted = function(){
		for(i in $scope.items){
			if($scope.items[i].deleted){ 
				$scope.items[i].archived = true;
				$scope.items[i].$put()
			}
		}
	}

	$scope.updateStarred = function(item){
		item.starred = !item.starred;
		item.$put()
	}

	$scope.updateDeleted = function(item){
		item.deleted = !item.deleted;
		item.$put()
	}
}