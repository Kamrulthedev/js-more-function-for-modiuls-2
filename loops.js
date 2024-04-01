/**
 * Objects----loops 
 * 
 * for of loops and for in loops 
*/


const mobaile = {
     name: 'Itel',
     camra: '50mpx',
     Price:20000,
     Prossor: 'midea tak',
     color: 'blake',
     storage: '32gb'
};

// console.log(mobaile);


// for(const Phone in mobaile){
//     console.log(Phone);
// }



const keys = Object.keys(mobaile);
console.log(keys)

for(const key of keys){
    console.log(key ,':', mobaile[key]);
    
}