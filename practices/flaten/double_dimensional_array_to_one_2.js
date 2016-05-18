'use strict';

function double_to_one(collection) {

  //在这里写入代码
  x = collection.join(",").split(",");
  var tmp = new Array();
  for(var i in x) {
    if(tmp.indexOf(x[i])===-1){
      tmp.push(x[i]);
    }
  }
  return tmp;
}

module.exports = double_to_one;
