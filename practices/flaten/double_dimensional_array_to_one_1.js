'use strict';

function double_to_one(collection) {
  var x = collection.join(",").split(",");
  for(var k = 0;k< x.length;k++){
    x[k] = Number(x[k]);
  }
  return x;
  //在这里写入代码
}

module.exports = double_to_one;
