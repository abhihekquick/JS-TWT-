const score=400;
const balance= new Number(400);
console.log(score,balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
const otherno=123.8966;
console.log(otherno.toPrecision(7));//gives value in string;
const hundred=100000;
console.log(hundred.toLocaleString('en-IN'));
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log (Math.floor(Math.random()*10)+1);
let min=10;
let max=20;
console.log(Math.floor(Math.random(max-min)*10)+min);