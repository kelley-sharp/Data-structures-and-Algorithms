function maxAreaOfIsland(self, grid){
  let seen = new Set ();
  let maxSize = 0;
  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
      if (grid[row][col] !==0 && !seen.has([row,col].toString())){
        let currentIslandSize = 0;
        //starting DFS
        let stack = [[row,col].toString()];
        seen.add([row,col].toString());
        while (stack.length){
          let coords = stack.pop();
          //destructuring
          let [r, c] = coords.split(",");
          let currentIslandSize += 1;
          if (grid[r-1][c] !== 0 && !seen.has(grid[r-1][c].toString()){
            stack.push[r-1, c].toString();
            seen.add[r-1, c].toString();
          }
          // three more if checks: north, west, east?
        }
        maxSize = Math.max(maxSize, currentIslandSize);
      }
    }
  }
  return maxSize;
}
