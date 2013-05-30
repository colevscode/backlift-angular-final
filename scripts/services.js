angular.module('ListServices',['ngResource']).
factory('ListItems',function($resource){
    return $resource(
        '/backlift/data/:listid/:id',
        {id: '@id'},                    // default values
        {
            create: {method: 'POST'},
            update: {method: 'PUT'}
        }
    );
});
