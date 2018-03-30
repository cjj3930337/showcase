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


    // 排班星期
    $scope.defaultStr = "请点击排班";
    $scope.selIndex = 0;
    $scope.dataList = [];

    $scope.scheduleTypes = [
    	{id: 1, name: '上午'},
    	{id: 2, name: '下午'},
    	{id: 3, name: '晚上'}
    ];

    //可排班科室/医生
    $scope.doctors = [];

    var arr = new Array({id: 1, name:'zhangsan'}, {id: 2, name:'lisi'});
    var df = new Array({name:'请点击排班'});

    //设置排班星期样式
    $scope.selType = -1;
    $scope.innerIndex = -1;
    $scope.outIndex = -1;
    //selected:日期索引  flag：是否比前日期小  outIndex外层：班次索引 id班次id
    $scope.change = function(flag, id, outIndex, innerIndex){
        //$scope.selType = -1;
        if(flag){
        	$scope.outIndex = outIndex;
            $scope.selType = id;
			$scope.innerIndex = innerIndex;
            console.log(flag, id, outIndex, innerIndex);
        }else{
        	console.log($scope.selType, $scope.outIndex,  $scope.innerIndex);
        	console.log(flag, id, outIndex, innerIndex);
        }
    }

    $scope.schedules = [
    	{
    		type: '1',
    		datas: [
    					{
				    		date: '2018-03-26',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-27',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-28',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-29',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-30',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
    			   ]
    	},
    	{
			type: '2',
    		datas: [
    					{
				    		date: '2018-03-26',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-27',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-28',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-29',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
    			   ]
    	},
		{
			type: '3',
    		datas: [
    					{
				    		date: '2018-03-26',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-27',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-28',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
			    	 	{
				    		date: '2018-03-29',
				    		type: '1',
				    		datas: [
				    					{id: 1, name: 'zhangsan2'},
				    					{id: 2, name: 'lisi2'}
				    			   ]
			    	 	},
    			   ]
    	}
    ];


    $scope.add1 = function(){
    	$scope.schedules[0].datas[4] = {
    		date: '',
			type: '',
			datas: []
    	}
    	$scope.schedules[0].datas[4].datas.push({id: 1, name: 'zhangsan3'});
    }

    $scope.add = function(){
    	if($scope.selType == -1){
    		alert('please select a schedule type');
    		return;
    	}
    	if($scope.schedules[$scope.outIndex].datas[$scope.innerIndex] == null){
	    	$scope.schedules[$scope.outIndex].datas[$scope.innerIndex] = {
	    		date: '',
				type: '',
				datas: []
	    	}
    	}
    	$scope.schedules[$scope.outIndex].datas[$scope.innerIndex].datas.push({id: 1, name: 'zhangsan3'});
    }

    $scope.dised = true;

    //可排班科室/医生
    $scope.doctors = [
    	{id: 1, name: '张三三', dept: '内科', status: false},
    	{id: 2, name: '李四四', dept: '外科', status: false},
    	{id: 3, name: '王五五', dept: '中医科', status: false},
    	{id: 4, name: '赵六六', dept: '妇科', status: false},
    ];


	//选择排班医生
	$scope.selectDoctor = function(item){
	    console.log(item);
	    item.status = !item.status;

	    if($scope.selType == -1){
	    	alert('please select a schedule');
	    }else{
	    	if($scope.schedules[$scope.outIndex].datas[$scope.innerIndex] == null){
		    	$scope.schedules[$scope.outIndex].datas[$scope.innerIndex] = {
		    		date: '',
					type: '',
					datas: []
		    	}
	    	}
	    	$scope.schedules[$scope.outIndex].datas[$scope.innerIndex].datas.push(item);
	    }
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