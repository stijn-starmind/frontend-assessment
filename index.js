import $ from "jquery";
//import angular from "angular";
//import lodash from "lodash";
import orderBy from "lodash/orderBy";

/*
TASK 1: https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de contains the ranking of group H in this Champions League
season's group stage. Display a table with the sorted ranking according to the GOALS SCORED. The team with the most goals scored should appear on top, the one with the least goals scored at the bottom. Each row should contain the team name
and the goals scored column.
*/
function getOrderedData() {
	return fetch("https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de")
	.then(response => response.json())
	.then(data => {
		return orderBy(data.rankingItems, "goalPlus", "desc");
	});
}

function createTable(orderedData) {
	let templateString = ``;
	
	orderedData.forEach(rank => {
		templateString +=
			`<tr>
				<td>${rank.competitor.name}</td>
				<td>${rank.goalPlus}</td>
			</tr>`;
	});
	
	$("#ranking").empty().append(templateString);
}

/*
TASK 2: Add a button to the HTML which reverses the sort order of the table.
*/
let data = [];
getOrderedData().then(ordered => {
	data = ordered;
	return data;
}).then(createTable);

window.reverseTable = () => {
	createTable(data.reverse());
};

/*
TASK 3: Add a column to the table displaying the total number of points of the team if every game consists just of the first half.
*/