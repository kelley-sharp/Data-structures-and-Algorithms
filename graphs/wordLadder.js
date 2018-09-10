class Node (name, neighbors) {
  constructor(val = 0) {
    this.name = name;
    this.neighbors = [];
  }


  this.neighbors.push(neighbors);

  isItANeighbor(nodeName1, nodeName2){
    count = 0;
    letter = "";
    for (c in nodeName1){
      for (h in nodeName2){ 
          if (c === h){
          count++;
        }
      }
    }
    if (count === 2){
      return true;
    }
    return false;
  }


}

class Graph {
  constructor(){
    this.nodes = {};
  }

  //
  addNodes(wordList){
    for (wordlist)
  }

  graphIncludesNode(){

  }

  getNode(name){
    //return node where node.name === name
  }

 

  //calculate shortest path
  //return shortest path length

}


addToNeighbors(nodeName1, nodeName2){
  if (isItANeighbor(nodeName1, nodeName2))
}

