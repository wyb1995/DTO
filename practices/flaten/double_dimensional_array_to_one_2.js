'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var x = collection.join(",").split(",");
  for(var k = 0;k< x.length;k++){
    x[k] = Number(x[k]);
  }
  var tmp = new Array();
  for(var i in x) {
    if(tmp.indexOf(x[i])===-1){
      tmp.push(x[i]);
    }
  }
  return tmp;
}

module.exports = double_to_one;
