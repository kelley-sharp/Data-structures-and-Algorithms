//for the following, find the time complexity:
// 1. Assume a and b are integers
function multiply(a, b) {
  let sum = 0;
  for(let i = 0; i < a; i++) {
    sum += b;
  }

  return sum;
}

//for loop is O(n)
//sum operation is constant time
//My answer: O(n)

/*2. "Russian Peasant Multiplication". Assume a and b are integers
//noting that: `bigger = bigger << 1` is the same as `bigger = bigger * 2` 
 and `smaller = smaller << 1` is the same as `smaller = Math.floor(smaller / 2)` */
function multiplyTwo(a, b) {
  let bigger = Math.max(a, b);
  let smaller = bigger === a ? b : a;

  let sum = 0;
  while(bigger >= 1) {
    if(bigger % 2 === 1) {
      sum += smaller;
    }

    bigger = bigger >> 1;
    smaller = smaller << 1;
  }

  return sum;
}

//math.max is constant?
//sum += smaller is constant
//while loop is O(n)?
//My answer: O(n)

//bit by shift doubles or divides by 2 everytime
//take which ever (a,b) is bigger
//ANSWER: O (log(Max(a,b)))

/* 3. Assume students is an array of integers */
function computePairs(students) {
  let pairs = [];
  for(let outer of students) {
    for(let inner of students) {
      pairs.push(multiply(outer, inner));
    }
  }
}

//double for loop is On^2
//push is constant I think
//My answer: O(n^2)

//how long pairs.push takes is based on the value of the two inputs. 
//the for loops run based on how many students in the array (once for each of the students)
//4^2 
//O (students^2 * (Max(students)))
//length of students is diff (can change independently) than the highest (or avg) value of students
//O (length^2 * max val of any one element) = 
//ANSWER?: 3d plot: O(n^2) O(n^3)

// 4. Assume students is an array of integers
function computePairsTwo(students) {
  let pairs = [];
  for(let outer of students) {
    for(let inner of students) {
      pairs.push(multiplyTwo(outer, inner));
    }
  }
}