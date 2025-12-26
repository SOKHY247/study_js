//  ES6 Module = An external file that contains resuable code 
            //  that can be imported into other js files.
            // write resusable code for many different apps.
            // Can contain varibles, classes , functions... and more
            // introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getDiameter}  from './Mat_util.js';

console.log(PI);

console.log('-------------------');
const area = getArea(10);
console.log(`${area}cm²`);


const diameter = getDiameter(10);
console.log(`${diameter.toFixed(2)}cm`);

console.log('-------------------');
const Circumference = getCircumference(10);
console.log(`${Circumference}cm`);



