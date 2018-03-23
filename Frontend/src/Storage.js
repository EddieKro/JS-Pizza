var basilInstance = require("basil.js");
basilInstance = new basil();

exports.get = function(key){
  return basilInstance.get(key);
};
exports.set = function(key, value){
  return basilInstance.set(key, value);
};