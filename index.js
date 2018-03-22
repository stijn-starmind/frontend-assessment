//import $ from "jquery";
import angular from "angular";
//import _ from "lodash";

import style from "./index.css";

/*
TASK: Complete the palindromeValidator directive such that the model gets invalid if the input is not a palindrome.
(the input is bordered green if the model is valid and red if it is not)
*/

const app = angular.module("assessment", []);
app.controller("mainController", ($scope) => {
	$scope.palindromeInput = "starmind";
});

app.directive("palindromeValidator", () => {
	return {
		require: "ngModel",
		link: (scope, element, attrs, ngModelController) => {
		  ngModelController.$validators.palindrome = (modelValue) => {
				let modelReversed = modelValue.split("").reverse().join("");
				return modelValue === modelReversed;
		  };
		}
	};
});

