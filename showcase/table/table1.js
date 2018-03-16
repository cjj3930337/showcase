var app = angular.module('app', []);
app.controller('ctrl', ['$scope', function ($scope){

	//
	$scope.amList = [];
	var arr = new Array({id: 1, name:'zhangsan'}, {id: 2, name:'lisi'});
	var df = new Array({name:'请点击排班'});
	$scope.amObj = {
		date: '2018-03-15',
		datas: arr
	};
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);
	$scope.amList.push($scope.amObj);

	$scope.pmList = {
		pm1 : [],
		pm2 : [],
		pm3 : [],
		pm4 : [],
		pm5 : [],
		pm6 : []
	};

	$scope.selIndex = 0;
	$scope.change = function(selected){
   		$scope.selIndex = selected;
   		console.log(selected);
   	}


   	$scope.del = function(bb){
   		console.info(bb)
   	}


   	$scope.weeks = {
   		week_1: '',
   		week_2: '',
   		week_3: '',
   		week_4: '',
   		week_5: '',
   		week_6: '',
   		week_7: '',
   	};


   	$scope.formatDate =  function(date) {   
		$scope.myyear = date.getFullYear();   
		$scope.mymonth = date.getMonth()+1;   
		$scope.myweekday = date.getDate();  
		 
		if($scope.mymonth < 10){   
			$scope.mymonth = "0" + $scope.mymonth;   
		}   
		if($scope.myweekday < 10){   
			$scope.myweekday = "0" + $scope.myweekday;   
		}   
		return ($scope.myyear+"-"+$scope.mymonth + "-" + $scope.myweekday);   
	} 

	$scope.init = function(){
   		var now = new Date(); //当前日期   
	    $scope.nowDayOfWeek = now.getDay(); //今天本周的第几天  
	    $scope.nowYear = now.getFullYear(); //当前年   
	    $scope.nowMonth = now.getMonth(); //月   
	    $scope.nowDay = now.getDate(); //日   
	    //获得本周的开端日期
		$scope.weekStartDate = new Date($scope.nowYear, $scope.nowMonth, $scope.nowDay - $scope.nowDayOfWeek + 1);   
		//
		$scope.getWeekDay($scope.weekStartDate);
		$scope.curDay = $scope.formatDate(now);
		
   	}

   	$scope.getWeekDay = function(weekStartDate){
   		$scope.weeks.week_1 = $scope.addDate(weekStartDate, 0);
   		$scope.weeks.week_2 = $scope.addDate(weekStartDate, 1);
   		$scope.weeks.week_3 = $scope.addDate(weekStartDate, 2);
   		$scope.weeks.week_4 = $scope.addDate(weekStartDate, 3);
   		$scope.weeks.week_5 = $scope.addDate(weekStartDate, 4);
   		$scope.weeks.week_6 = $scope.addDate(weekStartDate, 5);
   		$scope.weeks.week_7 = $scope.addDate(weekStartDate, 6);
   	}

   	$scope.addDate = function(date,days){
       var d = new Date(date); 
       d.setDate(d.getDate() + days); 
       var m = d.getMonth() + 1; 
       	if(m < 10){   
			m = "0" + m;   
		}
		var day = d.getDate();
		if(day < 10){   
			day = "0" + day;   
		}   
       return d.getFullYear() + "-" + m + "-" + day; 
    }


    $scope.init();

	$scope.getPre = function(){
		$scope.weekStartDate = $scope.addDate($scope.weekStartDate, -7);
		$scope.getWeekDay($scope.weekStartDate);
	}

	$scope.getNext = function(){
		$scope.weekStartDate = $scope.addDate($scope.weekStartDate, 7);
		$scope.getWeekDay($scope.weekStartDate);
	}

	$scope.getCur = function(){
		$scope.init();
	}

	$scope.test = function(){
		console.log('test');
	}


   	$scope.getDate = function(){
   		var now = new Date(); //当前日期   
	    $scope.nowDayOfWeek = now.getDay(); //今天本周的第几天  
	    $scope.nowYear = now.getFullYear(); //当前年   
	    $scope.nowMonth = now.getMonth(); //月   
	    $scope.nowDay = now.getDate(); //日   
	    $scope.beginHour="09:00:00";  
	    $scope.endHour="23:59:59";  


	    //获得本周的开端日期   
		$scope.weekStartDate = new Date($scope.nowYear, $scope.nowMonth, $scope.nowDay - $scope.nowDayOfWeek + 1);   

		//获得本周的停止日期   
		$scope.weekEndDate = new Date($scope.nowYear, $scope.nowMonth, $scope.nowDay + (6 - $scope.nowDayOfWeek + 1));   
		console.log($scope.formatDate($scope.weekStartDate));
		console.log($scope.formatDate($scope.weekEndDate));

		console.log($scope.nowYear);

   	}




}]);

app.filter('formatStr', function() { //可以注入依赖
    return function(text) {
    	if(angular.isArray(text)){
    		angular.forEach(objs, function(data,index,array){
				console.log(data.a+'='+array[index].a);
			});	
    	}
        return text.split("").reverse().join("");
    }
});

//var d = new Date();
//console.log(d.getFullYear());