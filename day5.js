/*--- Day 5: Doesn't He Have Intern-Elves For This? ---

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice?*/


var data = require("./assets/day5-input.js")();
var timer = require("./helpers/timer.js");

(function(input) {
	
	var result, test1, test2, test3, startTime;

	timer.start();

	result = 0;	
	test1 = /[aeiou].*[aeiou].*[aeiou]/;
	test2 = /.*([a-z])\1{1}/;
	test3 = /^((?!ab|cd|pq|xy).)*$/;
	
	input.forEach(function(string, index) {
		
		if( test1.test(string) && test2.test(string) && test3.test(string) ){
			result++;
		}
			
	});
	
	console.log("Result is: " + result + ' In ' + timer.stop() + ' sec' );

})(data);



/*--- Part Two ---

Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
For example:

qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
How many strings are nice under these new rules?
*/

(function(input) {
	
	var result, test1, test2, test3, startTime;

	timer.start();

	result = 0;	
	test1 = /\w*(\w{2})\w*\1/;
	test2 = /(\w)\w\1/;
	
	
	input.forEach(function(string, index) {
		
		if( test1.test(string) && test2.test(string) ){
			result++;
		}
			
	});
	
	console.log("Result is: " + result + ' In ' + timer.stop() + ' sec' );

})(data);