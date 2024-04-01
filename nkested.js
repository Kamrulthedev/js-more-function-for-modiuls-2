/**
 * nkested Routs
 * 
*/

const college = {
    name: 'DC COllEGE',
    address: 'Cox`s Bazer',
    class: '11, 12',
    Fevarite: ['21 Fabruary', '16 Decembar', 'Ohliy Day'],
    result: {
        'class-11': {
            'section-A-gpa': 5.00,
            'sectioin-B-gpa': '4.00'
        }
        ,
        'class-12': {
            'section-A-gpa': '5.00',
            'section-B-gpa': '4.00 - 3.00'
        }
    }
};
// console.log(college);

delete college.address;

console.log(college);

const result = college.result["class-12"]["section-A-gpa"];
console.log(result);