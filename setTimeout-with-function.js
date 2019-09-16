const func = () => {
    console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);

//for: func(arg1, arg2, arg3, ...)
// wecan use : setTimeout(func, delay, arg1, arg2, arg3, ...)