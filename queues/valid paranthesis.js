/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

var isValid = function(s) {
  let queue = [];
  if (s === '') {
    return true;
  }else if (s.length === 1) {
    return false;
  }
  for (let char of s) {
    if (char === ']') {
      if (queue[queue.length - 1] === '[') {
        queue.pop();
        continue;
      } else {
        return false;
      }

    } else if (char === ')') {
      if (queue[queue.length - 1] === '(') {
        queue.pop();
        continue;
      } else {
        return false;
      }

    } else if (char === '}') {
      if (queue[queue.length - 1] === '{') {
        queue.pop();
        continue;
      } else {
        return false;
      }
    } else {
      queue.push(char);
      continue;
    }
  }
  if (
    queue[queue.length - 1] === '(' ||
    queue[queue.length - 1] === '[' ||
    queue[queue.length - 1] === '{') {
    return false;
  }
  return true;
};

/*
Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
