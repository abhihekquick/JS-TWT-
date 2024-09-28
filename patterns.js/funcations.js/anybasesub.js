function anybasesub(base, num1, num2) {
  let ans = 0;
  carry = 0;
  pow = 1;
  while (num1 > 0 || num2 > 0 || carry > 0) {
    let d1 = num1 % 10;
    let d2 = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    let d = d1 - d2 - carry;
    if (d < 0) {
      d = d + base;
      
      carry = 1;
    } else {
      carry = 0;
    }
    ans = ans + d * pow;
    pow = pow * 10;
  }
  return ans;
}
let sub = anybasesub(8, 62, 78);
console.log(sub);
