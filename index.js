//import $ from "jquery";
import angular from "angular";
//import _ from "lodash";
import orderBy from "lodash/orderBy";

/*
TASK 1: https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de contains the ranking of group H in this Champions League
season's group stage. Display a table with the sorted ranking according to the GOALS SCORED. The team with the most goals scored should appear on top, the one with the least goals scored at the bottom. Each row should contain the team name
and the goals scored column.
*/
const app = angular.module("assessment", []);

/*
TASK 2: Add a button to the HTML which reverses the sort order of the table.
*/

// see template


/*
TASK 3: Write a function that validates the table by adding up all goalsPlus in the group and all goalsMinus in the group
and outputs true if the difference is 0. Background the table green if it is valid or red if it is not.
*/

const getReducerFunctionFor = (field) => {
	return (totalGoals, currentRank) => {
		return totalGoals + currentRank[field];
	};
};

app.controller("tableController", ($http, $scope) => {
	$http.get("https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de").then(response => {
		$scope.ranking = orderBy(response.data.rankingItems, "goalPlus", "desc");
				
		$scope.tableIsValid = () => {
			return $scope.ranking.reduce(getReducerFunctionFor("goalPlus"), 0)
			=== $scope.ranking.reduce(getReducerFunctionFor("goalMinus"), 0);
		}
	});
});