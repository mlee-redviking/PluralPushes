let counter = 0;
const intervalId = setInterval(() => {
    console.log('hello world');
    counter += 1;

    if (counter === 5){
        console.log('done');
        clearInterval(intervalId);
    }
}, 1000);