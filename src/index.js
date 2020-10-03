
exports.min = function min(array = []) {
  if(array === undefined){
    return 0;
  }
  if(array.length == 0){
    array.push(0);
  }
  return Math.min(...array);
}

exports.max = function max(array = []) {
  if(array === undefined){
    return 0;
  }
  if(array.length == 0){
    array.push(0);
  }
  return Math.max(...array);
}

exports.avg = function avg(array) {
  if(array === undefined){
    return 0;
  }
  const sum = array.reduce((sum, item) => sum + item, 0);
  return sum / array.length || 0;
}
