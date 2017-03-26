// array literals
const arr1 =[1, 2, 3];	// array of numbers
const arr2 = ["one", 2, "three"];	// nonhomogeneous array
const arr3 = [[1, 2, 3], ["one", 2, "three"]];	// array containing arrays
const arr4 = [	// nonhomogeneous array
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
arr1[0];	// 
arr1[2];	// 2
arr3[1];	// ["one", 2 , "three"]
arr4[1][0];	// {name: "Susan", type: "object"}

// array length
arr1.length;	// 3
arr4.length;  // 5
arr4[1].length; // 2

// increasing array size
arr1[4] = 5;
arr1;	// [1, 2, 3, undefined, 5]
arr1.length;	// 5

// accessing (not assigning) an index larger than the array
// does *not** change the size of the array
arr2[10];	// undefined
arr2.length;	// 3

// Array constructor (rarely used)
const arr5 = new Array();	// empty array
const arr6 = new Array(1, 2, 3);	// [1, 2, 3]
const arr7 = new Array(2);	// array of length 2 (all elements undefined)
const arr8 = new Array("2");	// ["2"]

// Adding or Removing Single Elements at the Beginning or End
const arr9 = ["b", "c", "d"];
arr9.push("e");	// returns 4; arr9 is now ["b", "c", "d", "e"]
arr9.pop();	// returns "e", arr9 is now ["b", "c", "d"]
arr9.unshift("a");	// returns 4; arr9  is now ["a", "b", "c", "d"]
arr9.shift();	//returns "a"; arr9 is now ["b", "c", "d"]


