module.exports = function getZerosCount(number, base) {

  let result = [],
      pow,
      zeros,
      _base = base,
      _number;

  for (let i = 2; i <= base; i++) {

    if (_base % i === 0) {
      
      pow = 0;

      while (_base % i === 0) {
        pow++;
        _base = ~~(_base/i);
      }

      _number = number;
      zeros = 0;

      while (_number/i > 0) {
        zeros += ~~(_number/i);
        _number = ~~(_number/i);
      }

      result.push(~~(zeros/pow));
    }
  }
  
  result.sort(function(a, b) {
    return a - b;
  });

  return result[0];
}