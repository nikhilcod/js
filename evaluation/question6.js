//Write a function sleep(ms), it should return a promise and that promise should resolve after ms milliseconds

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSleep(a) {
    console.log('Taking a break...');
    await sleep(a);
    
    console.log('Two seconds later, showing sleep in a loop...');
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
        if (i === 3)
            await sleep(a);
        console.log(i);
    }
}

runSleep(2000);