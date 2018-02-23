module.exports = function getZerosCount(number, base) {

var count = 0, k, d = 0;
var arr = [];

function isPrime(num) {
  if(num < 2) return false;
  for (let i = 2; i < num; i++) {
      if(num%i==0)
          return false;
  }
  return true;
}


for (let i = 2; i<=base; i++) {
  if (isPrime(i) && base%i === 0) {
    k = i;
    while(k<=number) {
      count += Math.floor(number/k);
      k = k*i;

    }
    arr.push(count);
    count = 0;
    console.log(i);
  }
}
var temp = base;
var arrtemp = [];
for (let i = 2; i<=temp; i++) {
  if (isPrime(i) && temp%i === 0) {
    arrtemp.push(i);
    temp = temp/i;
    i=1;
  }
}
console.log(arrtemp);
var minus = 1;
for(let i = arrtemp.length-1; i>0;i--) {
  if (arrtemp[i] === arrtemp[i-1]) minus++;
  else i=0;
}
console.log(minus);

return Math.floor(arr[arr.length-1]/minus);



}