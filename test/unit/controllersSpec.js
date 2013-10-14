'use strict';

beforeEach(module('phonecatApp'));

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function() {

    it('should create "phones" model with 3 phones', inject(function ($controller, $rootScope) {
      var ctrl = $controller('PhoneListCtrl', {$scope: $rootScope});
      expect($rootScope.phones.length).toBe(3);
    }));

    it('should create "people" model with 4 people', inject(function($controller, $rootScope) {
      var ctrl = $controller('PhoneListCtrl', { $scope: $rootScope });
      expect($rootScope.people.length).toBe(4);
    }));

    it('should calculate my age', inject(function($controller, $rootScope) {
      var ctrl = $controller('PhoneListCtrl', {$scope: $rootScope});
      expect($rootScope.age).toBe(39);
    }));
  });
});
