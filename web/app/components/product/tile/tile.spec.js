
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {tile} from './tile';

describe('the tile', () => {
  const $ = window.$;
  let element, $scope;

  let buildTemplate = () => {
    return angular.element('<tile product="product"></tile>');
  };

  beforeEach(window.module(tile.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));


  describe('shows the product', () => {
    it('title', () => {
      $scope.product = {title: 'vw Wilson Blade 104'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('vw Wilson Blade 104');
    });

    it('description', () => {
      $scope.product = {vendor: 'IBM MOCK STORE'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-description"' + ']').text())
          .should.equal('IBM MOCK STORE');
    });

    it('image');
    it('retail price');
    it.skip('name: RF-97 Autograph', () => {
      $scope.product = {title: 'RF-97 Autograph'};
      $scope.$digest();
      ($(element).find('span[rel=' + '"product-title"' + ']').text())
          .should.equal('RF-97 Autograph');
    });
  });
});
