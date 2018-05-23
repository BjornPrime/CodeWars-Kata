/*
Write a function that, given a depth (n), returns a single-dimensional array
representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/

function pascalsTriangle(n) {
  var tri = [];
  for (i = 0; i < n; i++) {
    var layer = [];
    for (j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        layer.push(1);
      } else {
        layer.push(tri[tri.length - ((i+1) - j)] + tri[tri.length-((i+1) - j) + 1]);
      }
    }
    tri = tri.concat(layer);
    console.log(tri);
  }
  return tri;
}
