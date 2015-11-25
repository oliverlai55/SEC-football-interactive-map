var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

function interactiveMapCntrl($scope){
	$scope.states = states;
}
