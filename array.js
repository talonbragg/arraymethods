// array literals
const arr1 =[1, 2, 3];															// array of numbers
const arr2 = ["one", 2, "three"];										// nonhomogeneous array
const arr3 = [[1, 2, 3], ["one", 2, "three"]];			// array containing arrays
const arr4 = [																			// nonhomogeneous array
	{name: "Fred" type: "object", luckyNumbers = [5, 7, 13},
	[
		{name:"Susan", type: "object"}.
		{name:"Anthony", type: "object"}
	],
	1,
	function() { return "arrays can contain functions too"; },
	"three"
];

// accessing array elements
arr1[0];																						// 1
arr1[2];																						// 2
arr3[1];																						// ["one", 2 , "three"]