const Price = [250, 645, 300, 900, 50];
const discount = 10;
let discounted = [];

for (let i = 0; i < Price.length; i++) {
     let dis= Price[i] - (Price[i] * discount / 100);
     discounted.push(dis);
}
console.log(discounted);


