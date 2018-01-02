'use strict';

angular.module('tree',[]).controller('treeCtrl', function ($scope) {
  var vm = $scope.vm = {};
  vm.countries = [
    {
      label: '中国',
      flag: 'cn.png',
      closed: true,
      provinces: [
        {
          label: '北京',
          closed: true,
          cities: [
            {
              label: '朝阳区',
              closed: true
            },
            {
              label: '宣武区',
              closed: true
            },
            {
              label: '海淀区',
              closed: true
            }
          ]
        },
        {
          label: '河北',
          closed: true,
          cities: [
            {
              label: '石家庄',
              closed: true
            },
            {
              label: '承德',
              closed: true
            },
            {
              label: '唐山',
              closed: true  
            }
          ]
        }
      ]
    },
    {
      label: '美国',
      flag: 'us.png',
      closed: true,
      provinces: [
        {
          label: '纽约',
          closed: true,
          cities: [
            {
              label: '曼哈顿区',
              closed: true
            },
            {
              label: '皇后区',
              closed: true
            }
          ]
        },
        {
          label: '德克萨斯州',
          closed: true,
          cities: [
            {
              label: '休斯顿',
              closed: true
            },
            {
              label: '达拉斯',
              closed: true  
            }
          ]
        },
        {
          label: '加利福尼亚州',
          closed: true
        }
      ]
    }
  ];
  vm.select = function(country, province, city) {
    vm.country = country;
    vm.province = province;
    vm.city = city;
  };
});