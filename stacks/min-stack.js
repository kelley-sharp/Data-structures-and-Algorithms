/*Design a stack that supports push, pop, top, and retrieving the minimum element
 in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

class minStack (arr) {
 let stack = arr;
 let previous = arr[0];
 let min = arr[0];

  push (x) {
    stack.push(x); 
    if (x < min && x < previous){
      previous = min;
      min = x;
    } else if (x < min){
      min = x;
    }
  }

  pop () {
    if (stack[stack.length-1] === min){
      min = previous;
    }
    stack.pop()
  }

  top () {
    return stack[stack.length-1];
  }

  getMin () {
    return min;  
  }
}

/*
another way:

this.stack = [];
this.min = infinity;

push:
if x is smaller than current min, push current min onto stack first,
then push x.
update min to be x.

pop:



yet another way:
this.stack=[{item: min at that time}]