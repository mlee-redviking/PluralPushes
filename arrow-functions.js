const square =(a) => {
    return a *a;
};


//if func does 1 thing, you can use
const square = (a) => a*a;

//if func has only one arg, you can use
const square = a => a*a;


//popular for func that gets passed to array methods 
//such as map and filter
[1,2,3,4].map(a => a*a);