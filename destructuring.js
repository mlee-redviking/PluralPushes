//const PI = Math.PI;
//const E = Math.E;
//const SQRTZ = Math.SQRTZ;

const{PI, E, SQRTZ} = Math;
// with require
//const {readFile} = require('fs');


const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({radius}) =>
(PI * radius * radius).toFixed(2);


/*  destructure precision to 2
const circleArea = ({radius},{precision =2 }) =>
(PI * radius * radius).toFixed(precision);
*/

/*  default precision of 2.  add the equal after the deconstruction
of precision

const circleArea = ({radius},{precision =2 } = {}) =>
(PI * radius * radius).toFixed(precision);
*/

console.log(
    circleArea(circle)
);

console.log(
    circleArea(circle, {precision: 5})
);

const [first, second,, forth] = [10,20,30,40];