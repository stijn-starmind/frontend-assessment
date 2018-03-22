//import $ from "jquery";
import angular from "angular";
//import _ from "lodash";

/*
TASK 1: https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de contains the ranking of group H in this Champions League
season's group stage. Display a table with the sorted ranking according to the GOALS SCORED. The team with the most goals scored should appear on top, the one with the least goals scored at the bottom. Each row should contain the team name
and the goals scored column.
*/
const app = angular.module("assessment", []);
app.controller("tableController", () => {
	
});


/*
TASK 2: Add a button to the HTML which reverses the sort order of the table.
*/

/*
TASK 3: Write a function that validates the table by adding up all goalsPlus in the group and all goalsMinus in the group
and outputs true if the difference is 0. Background the table green if it is valid or red if it is not.
*/
