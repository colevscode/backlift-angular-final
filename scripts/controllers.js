function ListController($scope, $routeParams, ListItems){

	$scope.url = window.location.origin+'/'+$routeParams.listid;

	var listItems = ListItems.bind({listid:$routeParams.listid});
	$scope.items = listItems.get({});

	$scope.addNewItem = function(){
		newitem = {
			'text':$scope.itemText,
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

	$scope.updateDeleted = function(item){
		item.deleted = !item.deleted;
		item.$put()
	}
}