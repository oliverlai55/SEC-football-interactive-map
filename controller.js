var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return{
		link: function($scope, element, iAttrs){
			// console.log(iAttrs);
		
			element.bind('click', function(){
				console.log($scope.state);
				var newColor = getNewColor($scope.state);
				//we are trying to fill the path tag, not g
				var pathOfTheElement = element[0].querySelector('path')
				console.log(pathOfTheElement);
				pathOfTheElement.setAttribute('class','state ' + newColor);



			});
		}
	}
});



function interactiveMapCntrl($scope){
	$scope.states = states;
}

function getNewColor(state){
	if(state.stateColor == 'red'){
		state.stateColor = 'blue';
		return "blue";
	}else if(state.stateColor == 'blue'){
		state.stateColor = "open";
		return "open";
	}else if(state.stateColor == 'open'){
		state.stateColor = 'red';
		return "red";
	}else{
		return console.log("error");
	}
}