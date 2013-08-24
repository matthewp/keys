var has = Object.prototype.hasOwnProperty;

module.exports = Object.keys || function(obj){
  var keys = [];

  for (var key in obj) {
    if (has.call(key)) {
      keys.push(key);
    }
  }

  return keys;
};
