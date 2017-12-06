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
    var doubleItem = callback(item);
    doubleArray.push(doubleItem);
  }
  return doubleArray;
}

Enumeration.prototype.filter = function(array, callback){
  var returnArray = [];
  for(let item of array) {
    var newItem = callback(item);
    if (newItem === true){
      returnArray.push(item);
    }
  }
  return returnArray;
}

Enumeration.prototype.some = function(array, callback) {
  moreThanNumber = 0;
  // moreThanOneHundred = 0;
  for (let item of array) {
    if (callback(item)){
      moreThanNumber++;
    // }
    // if (item > 100){
    //   moreThanOneHundred++;
     }
  }
  if (moreThanNumber > 2){
    return true;
  }
  else return false;
}

module.exports = Enumeration;
