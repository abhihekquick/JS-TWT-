
//  const Mynums=[1,2,3,4,5,6,7,8,9,10,];
// const newnums=Mynums.filter((num)=>num>4)
// console.log(newnums);

// const newnums=[];
// Mynums.forEach((num) => {
//     if(num>4){
//         newnums.push(num);
//     }
    
// });
// console.log(newnums);



// reduce//
// const arry1=[1,2,3];
// let total=arry1.reduce( (acc,currval)=>{
//     console.log(`acc:${acc}andcurrval:${currval}`);
//     return acc+currval

// },0);
// console.log(total);

const shoppingcart=[
    {
        itemname:'js',
        price:999
    },
    {
        itemname:'python',
        price:800
    },
    {
        itemname:'cpp',
        price:600
    },
    {
        itemname:'mobile dev',
        price:12000
    },
    {
        itemname:'dsa',
        price:1000
    },
    
]
const Pricetopay=shoppingcart.reduce((acc,item)=>acc+item .price,0);
console.log(Pricetopay);