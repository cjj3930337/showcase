var app = angular.module('CrudApp', ['ngRoute']);
app.controller ("ListCtrl", ["$scope", "$http", function($scope, $http) {
   $http.get('data/users.json').success(function(data) {
     $scope.users = data;
   });
  $scope.editedTodo = null;
  $scope.add_new = function(user,AddNewForm){
      $scope.users.push(user);
   };
  $scope.deleteUser =function(id){
     $scope.users.forEach(function(e,index){
         if(e.id == id){
             $scope.users.splice(index,1);
        }
      });
  };  
  $scope.editUser = function (user) {
        $scope.editedTodo = user;
        console.info(user);
        $scope.originalTodo = angular.extend({}, todo);
    };
     // 编辑user完成
    $scope.doneEditing = function (user) {
        // 置空
        $scope.editedTodo = null;
        user.username = user.username.trim();
        if (! user.username) {
            $scope.removeUser(user);
        }
    };
    // 恢复编辑前的user
    $scope.revertEditing = function (user) {
        todos[todos.indexOf(user)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
    };
}]);
app.directive('todoFocus', function todoFocus($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.todoFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
});
