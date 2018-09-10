function getElementById(node, id){

  //check if node is the one, return if it is
  if (node.id === id){
    return node;
    //only if tree is exhausted and id not found
  } else if ( node === undefined ){
    return undefined;
  } 

  for (let child of node.children){
    //will either return undefined or child when called (stored in result)
    let result = getElementById(child, id);
    //if undefined, it wasnt found, continue the loop
    //else return the result
    if (result !== undefined){
      return result;
    }
  }
}

//if undefined, pop off stack and return undefined to its parent (function that called it).
//if defined it will be the one, don't have to keep looking through next node and children.



//traverse the dom
//search each child, if current is not the one
function search(current){

}