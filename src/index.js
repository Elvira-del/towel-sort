
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix) {
    matrix.forEach((element, index) =>
      element.sort((a, b) => (index % 2 !== 0 ? b - a : a - b))
    );    
    return matrix.flat();
  } else {    
    return [];
  }
} 
