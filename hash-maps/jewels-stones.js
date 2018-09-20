/*
You're given strings J representing the types of stones that are jewels, 
and S representing the stones you have.  Each character in S is a type of
 stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
*/

var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    for (let k = 0; k < J.length; k++) {
      if (S[i] === J[k]) {
        count++;
      }
    }
  }
  return count;
};

//better solution:

var numJewelsInStones = function(jewels, stones) {
  let numJewels = 0;
  let stoneCount = {};
    for (let s of stones){
        if (stoneCount[s]){
            stoneCount[s]++;
        } else {
            stoneCount[s] = 1;
        }
    }
    for (let stone in stoneCount){
        if (jewels.includes(stone)){
            numJewels += stoneCount[stone];
        }
    }
    return numJewels;
}

