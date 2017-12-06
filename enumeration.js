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

module.exports = Enumeration;
