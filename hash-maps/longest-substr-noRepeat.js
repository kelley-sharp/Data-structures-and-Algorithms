/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 

             Note that the answer must be a substring, "pwke" 
             is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let obj = {};
    //if seen it before, change longest to the current index.
};

//or two pointer/sliding window:

var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  //just stores all chars within current window. Add/remove as you go.
  let seen = new Set();
  let left = 0; //left point to beginning of current str
  let right = 0; //points to end of current str

  while (left < s.length || right < s.length){
    if (!set.has(s[right])){
      seen.add(s[right]);
      right++;
      longest = Math.max(longest, right - left);
    } else {
      //if we have seen the end char before, increment left while deleting from the set
      //the char on the right has not been seen before
      seen.delete(s[left]);
      left++;
    }
  }
};


//hash map solution:

var lengthOfLongestSubstring = function(s) {
  let hashMap = new Map();
  let longest = 0;
  let left = 0;

  for
  //left pointer is either the preciously saced index of the current char or the current in
  //longest is maz of its current calue or the length of the window (+1 becasue zero-based)
};


