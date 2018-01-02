var app = angular.module('myApp', ['toaster', 'ngAnimate']);
app.controller('msgCtrl', function($scope,toaster) {
	$scope.name = "test";
    $scope.submit = function() {
    	toaster.pop({
            title: 'A toast',
            body: 'with a callback',
            onHideCallback: function () { 
                // toaster.pop({
                //     type: 'success',
                //     title: 'Title text',
                //     body: 'Body text',
                //     showCloseButton: true,
                //     closeHtml: '<button>Close</button>'
                // });
             //    $timeout(function(){
	            //     $scope.name = "value setted after time out";  
	            //     $scope.$apply();//必需手动进行脏值检测,否则数据无法刷新到界面  
	            // },1000);
                $('#myModal').modal('hide');
                //$scope.$apply();
            }
		});
		//$('#myModal').modal('hide');
	}
});



//显示modal对话框时防止窗口抖动

//监听打开对话框时让父窗口左移17px
$(function () { 
	$('#myModal').on('show.bs.modal', function () {
  		//body.style.paddingRight = "17px";
  		console.info("model is open....");
    });
});   

 //监听关闭对话框时让父窗口还原
$(function () { 
	$('#myModal').on('hidden.bs.modal', function () {
		//body.style.paddingRight = "0px";
		console.info("model is close....");
	})
});