function ListController($scope, $routeParams, ListItems){

    $scope.url = 'https://'+window.location.host+'/'+$routeParams.listid;

    var ListItems = ListItems.bind({listid:$routeParams.listid});
    $scope.items = ListItems.query();

    $scope.addNewItem = function() {
        newitem = {
            'text':$scope.itemText,
            'deleted':false,
            'archived':false,
        }   
        newitem = ListItems.create(newitem);
        $scope.items.push(newitem);
        $scope.itemText = '';
    }

    $scope.deleteItem = function(item) {
        item.deleted = true;
        item.$update();
    }

    $scope.archiveItems = function() {
        for(var i in $scope.items) {
            var item = $scope.items[i];
            if(item.deleted && !item.archived) { 
                item.archived = true;
                item.$update();
            }
        }
    }   
}
