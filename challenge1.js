const theOneFunc = hang => {
    console.log('Hello after' + hang + 'seconds.')
};

setTimeout(theOneFunc, 4 *1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);