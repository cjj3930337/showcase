'use strict';

angular.module('tree',[]).controller('treeCtrl', function ($scope) {
  var vm = $scope.vm = {};
  vm.countries = [
    {
      label: '中国',
      flag: 'cn.png',
      closed: true,
      checked: false,
      provinces: [
        {
          label: '北京',
          closed: true,
          checked: false,
          cities: [
            {
              label: '朝阳区',
              closed: true,
              checked: false
            },
            {
              label: '宣武区',
              closed: true,
              checked: false
            },
            {
              label: '海淀区',
              closed: true,
              checked: false
            }
          ]
        },
        {
          label: '河北',
          closed: true,
          checked: false,
          cities: [
            {
              label: '石家庄',
              closed: true,
              checked: false
            },
            {
              label: '承德',
              closed: true,
              checked: false
            },
            {
              label: '唐山',
              closed: true,
              checked: false
            }
          ]
        }
      ]
    },
    {
      label: '美国',
      flag: 'us.png',
      closed: true,
      checked: false,
      provinces: [
        {
          label: '纽约',
          closed: true,
          checked: false,
          cities: [
            {
              label: '曼哈顿区',
              closed: true,
              checked: false
            },
            {
              label: '皇后区',
              closed: true,
              checked: false
            }
          ]
        },
        {
          label: '德克萨斯州',
          closed: true,
          checked: false,
          cities: [
            {
              label: '休斯顿',
              closed: true,
              checked: false
            },
            {
              label: '达拉斯',
              closed: true,
              checked: false
            }
          ]
        },
        {
          label: '加利福尼亚州',
          closed: true,
          checked: false
        }
      ]
    }
  ];
  vm.select = function(country, province, city) {
    vm.country = country;
    vm.province = province;
    vm.city = city;
  };

  vm.countryChanged = function(country) {
    // 自动选中所有下级
    _.each(country.provinces, function(province) {
      province.checked = country.checked;
      _.each(province.cities, function(city) {
        city.checked = country.checked;
      });
    });
  };
  vm.provinceChanged = function(province, country) {
    // 自动选中所有下级
    _.each(province.cities, function(city) {
      city.checked = province.checked;
    });
    // 如果有任何一个子节点被选中，则让上级节点也选中
    // 注意！checkbox的ng-model只能绑定到逻辑型值，所以不能直接把findWhere的结果赋值过去
    country.checked = !!_.findWhere(country.provinces, {checked: true})
  };
  vm.cityChanged = function(city, province, country) {
    // 如果有任何一个子节点被选中，则让上级节点也选中
    // 注意！checkbox的ng-model只能绑定到逻辑型值，所以不能直接把findWhere的结果赋值过去
    province.checked = !!_.findWhere(province.cities, {checked: true});
    country.checked = !!_.findWhere(country.provinces, {checked: true});
  };
  vm.isIntermediateCountry = function(country) {
    // 是否有任何被选中的节点
    var hasChecked = _.find(country.provinces, function(province) {
      return province.checked && _.findWhere(province.cities, {checked: true});
    });
    // 是否有任何没有选中的节点
    var hasNoChecked = _.find(country.provinces, function(province) {
      return !province.checked || _.findWhere(province.cities, {checked: false});
    });
    // 如果同时有选中状态和非选中的节点，则为中间状态
    return hasChecked && hasNoChecked;
  };
  vm.isIntermediateProvince = function(province) {
    var hasChecked = _.findWhere(province.cities, {checked: true});
    var hasNoChecked = _.findWhere(province.cities, {checked: false});
    return hasChecked && hasNoChecked;
  };
});