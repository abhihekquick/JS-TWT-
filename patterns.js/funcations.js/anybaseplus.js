function anybaseplus(base, num1, num2) {
  let ans = 0;
  let c = 0;
  let pow = 1;
  while (num1 > 0 || num2 > 0 || c > 0) {
    let num1ld = num1 % 10;
    let num2ld = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    let d = num1ld + num2ld + c;
    c = Math.floor(d / base);

    d = d % base;
    ans += d * pow;
    pow = pow * 10;
  }
  return ans;
}

let sum = anybaseplus(8, 67, 43);
console.log(sum);
