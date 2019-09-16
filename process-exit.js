setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('process will exit now. see ya');

});

console.log('Hello!');