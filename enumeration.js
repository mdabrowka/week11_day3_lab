var Enumeration = function() {}

Enumeration.prototype.find = function(array, callback) {
  for(let item of array) {
    callback(item);
    const isItem = callback(item);

    if(isItem) {
      return item;
    }
  }
}

Enumeration.prototype.map = function(array, callback) {
  var doubleArray = [];
  for(let item of array) {
    var doubleItem = item * 2;
    doubleArray.push(doubleItem);
  }
  return doubleArray;
}


module.exports = Enumeration;
