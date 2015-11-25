var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return{
		link: function($scope, element, iAttrs){
			// console.log(iAttrs);
		
			element.bind('click', function(){
				console.log($scope.state)
				var newColor = "red";
				var pathOfTheElement = element[0].querySelector('path')
				console.log(pathOfTheElement);
				pathOfTheElement.setAttribute('class',newColor);

			});
		}
	}
});



function interactiveMapCntrl($scope){
	$scope.states = states;
}
