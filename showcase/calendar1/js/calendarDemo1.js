/**
 * calendarDemoApp - 0.9.0
 */
var calendarDemoApp = angular.module('calendarDemoApp', ['ui.calendar', 'ui.bootstrap']);

calendarDemoApp.controller('CalendarCtrl',
   function($scope, $compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    
    
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'},
    	{title:'zql',start:new Date(y,m,3)}
    ];

    /* config object */
    $scope.uiConfig = {
      calendar:{
                height: 550,
                editable: true,
                weekNumbers: true,
                navLinks: true,
                eventLimit: true,
                buttonIcons: true,
                locale: 'zh-cn',
                selectable: true,
                unselectAuto: false,
                titleFormat:{  
                    month: 'YYYY MMMM', //2016 6月  
                    day: 'YYYY-MM-d,dddd '  // 2016-06-29,星期三  
                }, 
                defaultView:'agendaWeek', //默认的视图
                views: {
                    day: {
                        titleFormat: 'YYYY年MM月DD日'
                    },
                    week: {
                        titleFormat: 'YYYY年MM月'
                    },
                    month: { // name of view
                        titleFormat: 'YYYY年MM月'
                    },
                },
                timeFormat: 'HH:mm',
                header: {
                    left: 'prev,next today myCustomButton',
                    center: 'title',
                    right: 'agendaWeek,agendaDay,listMonth,month'
                },
                dayNames: [
                    "星期日",
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六"
                ], 
                dayNamesShort: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"], 
                monthNames: [
                    "一月",
                    "二月",
                    "三月",
                    "四月",
                    "五月",
                    "六月",
                    "七月",
                    "八月",
                    "九月",
                    "十月",
                    "十一月",
                    "十二月"
                ],
                eventClick:$scope.alertEventOnClick,
                eventDrop:$scope.alertOnDrop,
                eventResize:$scope.alertOnResize,
                dayClick:$scope.dayClick
          }
    };
    
    /* event sources array*/
    $scope.eventSources = [$scope.events];

    $scope.alertEventOnClick = function(){
      console.log("alertEventOnClick");
    }

    $scope.alertOnDrop = function(){
      console.log("alertOnDrop");
    }

    $scope.alertOnResize = function(){
      console.log("alertOnResize");
    }

    $scope.dayClick = function(dayDate, allDay, jsEvent, view){
       console.log(dayDate);
       console.log(allDay);
    }
});
/* EOF */
