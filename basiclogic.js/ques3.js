let num = 7869;
let temp = num;
let nod = 0;
while (temp>0) {
  num=Math.floor(temp / 10);
  nod++;
}
console.log(nod);
let div=Math.pow(10,nod-1);
console.log(div);

while (num > 0) {
  let id=Math.floor(num / div);
  console.log(id);
  num=num%div;
  div=Math.floor(div / 10);
}

